from core_brain.graph.loader import ConceptGraph
from core_brain.graph.schema import Concept

graph = ConceptGraph()

def load(concepts, prereqs):
    for c in concepts:
        graph.add_concept(Concept(**c))
    for a,b in prereqs:
        graph.add_prereq(a,b)