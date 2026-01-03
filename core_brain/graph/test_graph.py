from core_brain.graph.loader import ConceptGraph
from core_brain.graph.schema import Concept

g = ConceptGraph()
g.add_concept(Concept("C1","Variables",1,1,["python"]))
g.add_concept(Concept("C4","Control Flow",1,2,["python"]))
g.add_prereq("C1","C4")

print("Graph loaded.")