def normalize_edges(edges, concepts):
    ids = [c["id"] for c in concepts]
    norm = []

    for e in edges:
        if isinstance(e, dict) and "from" in e and "to" in e:
            norm.append(e)
        elif isinstance(e, (list, tuple)) and len(e) == 2:
            norm.append({"from": e[0], "to": e[1]})
        elif isinstance(e, str):
            if e in ids:
                idx = ids.index(e)
                if idx + 1 < len(ids):
                    norm.append({"from": ids[idx], "to": ids[idx+1]})
    return norm
