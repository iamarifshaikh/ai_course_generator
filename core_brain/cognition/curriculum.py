import networkx as nx

class CurriculumEngine:
    """
    Curriculum Learning + Control System.
    Responsible for ordering concepts in optimal cognitive sequence.
    """

    def __init__(self, controller):
        self.controller = controller

    def paced_order(self, nodes, prereqs, mastery_map, time_map):
        G = nx.DiGraph()
        ids = [n["id"] for n in nodes]
        G.add_nodes_from(ids)
        G.add_edges_from(prereqs)

        base = list(nx.topological_sort(G))

        nodes_map = {n["id"]: n for n in nodes}

        return sorted(
            base,
            key=lambda cid: nodes_map[cid]["difficulty"] +
                self.controller.adjust_difficulty(
                    mastery_map.get(cid, 0.2),
                    time_map.get(cid, 20)
                )
        )
