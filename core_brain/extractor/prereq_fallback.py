def fallback_prereqs(concepts):
    concepts = sorted(concepts, key=lambda c: c["difficulty"])
    edges = []

    for i in range(len(concepts) - 1):
        edges.append({
            "from": concepts[i]["id"],
            "to": concepts[i + 1]["id"]
        })

    return edges
