def prune_known(nodes, learner):
    return [n for n in nodes if learner.get_mastery(n["id"]) < 0.9]

def paced_order(nodes, edges):
    import networkx as nx
    G = nx.DiGraph()

    node_ids = [n["id"] for n in nodes]
    G.add_nodes_from(node_ids)
    G.add_edges_from([(e["from"], e["to"]) for e in edges])

    order = list(nx.topological_sort(G))
    diff_map = {n["id"]: n["difficulty"] for n in nodes}

    return sorted(order, key=lambda x: diff_map.get(x, 999))


class DynamicCurriculumCompiler:
    def __init__(self, learner, memory):
        self.learner = learner
        self.memory = memory

    def compile(self, concepts, prereqs):
        nodes = prune_known(concepts, self.learner)
        if not nodes:
            nodes = sorted(concepts, key=lambda x: x["difficulty"])[:5]

        order = paced_order(nodes, prereqs)
        return [{"concept": c} for c in order]