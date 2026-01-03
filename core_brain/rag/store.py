from qdrant_client import QdrantClient
from qdrant_client.http.models import Distance, VectorParams, PointStruct

COLLECTION = "docs"

client = QdrantClient(":memory:")

def init_collection():
    client.recreate_collection(
        collection_name=COLLECTION,
        vectors_config=VectorParams(size=768, distance=Distance.COSINE)
    )

def upsert(chunks, embeddings):
    points = [
        PointStruct(
            id=i,
            vector=emb,
            payload={"text": chunk}
        )
        for i,(chunk,emb) in enumerate(zip(chunks, embeddings))
    ]

    client.upsert(
        collection_name=COLLECTION,
        points=points
    )