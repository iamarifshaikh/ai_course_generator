from core_brain.rag.store import client, COLLECTION
from core_brain.rag.embedder import embed

def retrieve(query, top_k=6):
    try:
        query_vec = embed([query])[0]
        return client.query_points(
            collection_name=COLLECTION,
            query=query_vec,
            limit=top_k,
            with_payload=True
        )
    except:
        return []