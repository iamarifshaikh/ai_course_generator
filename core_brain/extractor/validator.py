import networkx as nx

def detect_cycles(edges):
    G = nx.DiGraph()
    G.add_edges_from([(e["from"], e["to"]) for e in edges])
    try:
        list(nx.topological_sort(G))
        return False
    except nx.NetworkXUnfeasible:
        return True


def find_missing_prereqs(concepts, edges):
    prereq_map = {c["name"]: [] for c in concepts}
    for e in edges:
        prereq_map[e["to"]].append(e["from"])

    missing = []
    for c in concepts:
        if c["difficulty"] >= 4 and len(prereq_map[c["name"]]) == 0:
            missing.append(c["name"])
    return missing


def inconsistent_difficulty(concepts, edges):
    diff = {c["name"]: c["difficulty"] for c in concepts}
    bad = []
    for e in edges:
        if diff[e["from"]] > diff[e["to"]]:
            bad.append(e)
    return bad


def disconnected_nodes(concepts, edges):
    G = nx.DiGraph()
    G.add_edges_from([(e["from"], e["to"]) for e in edges])
    nodes = [c["name"] for c in concepts]
    G.add_nodes_from(nodes)
    return [n for n in G.nodes if G.in_degree(n) == 0 and G.out_degree(n) == 0]
