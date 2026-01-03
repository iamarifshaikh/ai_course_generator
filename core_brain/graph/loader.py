from neo4j import GraphDatabase
from core_brain.config import NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD
from core_brain.graph.schema import Concept

class ConceptGraph:
    def __init__(self):
        self.driver = GraphDatabase.driver(
            NEO4J_URI, auth=(NEO4J_USER, NEO4J_PASSWORD)
        )

    def add_concept(self, concept):
        with self.driver.session() as session:
            session.run(
                """
                MERGE (c:Concept {id:$id})
                SET c.name = $name,
                    c.difficulty = $difficulty,
                    c.tags = $tags,
                    c.short_description = $short_description
                """,
                id=concept.id,
                name=concept.name,
                difficulty=concept.difficulty,
                tags=concept.tags,
                short_description=concept.short_description
            )

    def add_prereq(self, a, b):
        with self.driver.session() as session:
            session.run(
                """
                MATCH (a:Concept {id:$a}), (b:Concept {id:$b})
                MERGE (a)-[:PREREQ]->(b)
                """,
                a=a, b=b
            )
        
    def prerequisites(self, concept_id):
        with self.driver.session() as session:
            return [
                r["id"] for r in session.run(
                    """
                    MATCH (p:Concept)-[:PREREQ]->(c:Concept {id:$id})
                    RETURN p.id AS id
                    """,
                    id=concept_id
                )
            ]
            
    def get_prerequisites(self, cid):
        with self.driver.session() as session:
            result = session.run("""
                MATCH (p:Concept)-[:PREREQ]->(c:Concept {id:$cid})
                RETURN p.id
            """, cid=cid)
            return [r["p.id"] for r in result]

    def get_ordered_concepts(self):
        with self.driver.session() as session:
            result = session.run("""
                MATCH (c:Concept)
                RETURN c.id, c.tier, c.difficulty
                ORDER BY c.tier, c.difficulty
            """)
            return [r["c.id"] for r in result]

    def get_concepts_by_language(self, lang):
        with self.driver.session() as session:
            result = session.run("""
                MATCH (c:Concept)
                WHERE $lang IN c.languages
                RETURN c.id ORDER BY c.tier, c.difficulty
            """, lang=lang)
            return [r["c.id"] for r in result]
    
    def filter_by_tags(self, tags):
        with self.driver.session() as session:
            result = session.run("""
                MATCH (c:Concept)
                WHERE ANY(t IN c.tags WHERE t IN $tags)
                RETURN c.id AS id
            """, tags=tags)
            return [r["id"] for r in result]

    def all_prereqs(self, concept_id):
        with self.driver.session() as session:
            result = session.run("""
                MATCH (p:Concept)-[:PREREQ*]->(c:Concept {id:$id})
                RETURN DISTINCT p.id AS id
            """, id=concept_id)
            return [r["id"] for r in result]

    def subgraph(self, nodes):
        return nodes 

    def prune_mastered(self, nodes, mastery_model):
        return [n for n in nodes if mastery_model.get(n) < 0.9]

    def ensure_prereq_closure(self, nodes):
        full = set(nodes)
        for n in list(nodes):
            full |= set(self.all_prereqs(n))
        return list(full)

    def topological_order(self, nodes):
        with self.driver.session() as session:
            result = session.run("""
                MATCH (a:Concept)-[:PREREQ]->(b:Concept)
                WHERE a.id IN $nodes AND b.id IN $nodes
                RETURN a.id AS a, b.id AS b
            """, nodes=nodes)
            edges = [(r["a"], r["b"]) for r in result]

        import networkx as nx
        G = nx.DiGraph()
        G.add_nodes_from(nodes)
        G.add_edges_from(edges)
        return list(nx.topological_sort(G))