from core_brain.learner.mastery import MasteryModel
from core_brain.learner.memory import MemoryModel

m = MasteryModel()
mem = MemoryModel()

print("Initial mastery:", m.get("C1"))
m.update("C1", True)
mem.touch("C1")
print("After learning:", m.get("C1"))
print("Recall probability:", mem.recall_prob("C1", m.get("C1")))