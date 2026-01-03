from core_brain.llm.local import LocalLLM
from core_brain.llm.gemini import GeminiLLM
from core_brain.cognition.learner import CognitiveLearner
from core_brain.cognition.spaced import MemoryScheduler
from core_brain.orchestrator import BrainOrchestrator
from core_brain.loop import LearningLoop
from core_brain.cognition.bkt import BKT

from core_brain.rag.store import init_collection, upsert
from core_brain.extractor.chunker import chunk_text
from core_brain.rag.embedder import embed

init_collection()

seed = """
Python variables store data.
Loops repeat actions.
For loops iterate sequences.
While loops repeat while condition.
"""

chunks = chunk_text(seed)
embeddings = embed(chunks)
upsert(chunks, embeddings)

print("\n=== Cognitive Validation ===")
compiler_llm = GeminiLLM("AIzaSyAql1JDUsJeK5DArhiuip-Ep4HZb-fk6GU")
teacher_llm   = LocalLLM("Qwen/Qwen2.5-0.5B-Instruct")  # cheap, creative
learner = CognitiveLearner()
memory = MemoryScheduler()
brain = BrainOrchestrator(compiler_llm, teacher_llm, learner, memory)

profile = {
    "tone": "friendly",
    "lesson_size": "small",
    "visual_density": "high",
    "quiz_strictness": "medium",
    "assignments": True
}

loop = LearningLoop(brain, learner, memory, profile)

# ---------- Test 1: Prerequisite Gating ----------
print("\n[TEST 1] PREREQUISITE GATING")
learner.concepts["variables"] = BKT()   # force weak
syllabus = brain.build_course("Python loops")
lesson, concept, *_ = loop.next_lesson(syllabus)
print("Chosen concept:", concept)

# ---------- Test 2: Difficulty Escalation ----------
print("\n[TEST 2] DIFFICULTY ESCALATION")
for i in range(4):
    lesson, c, state, diff = loop.next_lesson(syllabus)
    print(f"Attempt {i+1} Difficulty:", diff)
    loop.submit_feedback(c, True, time_taken=8, prev_state=state, difficulty=diff)

# ---------- Test 3: Memory Revision ----------
print("\n[TEST 3] MEMORY REVISION")
memory.items[c].next_review -= 999999
lesson, c2, *_ = loop.next_lesson(syllabus)
print("Revision triggered for:", c2)

# ---------- Test 4: Remediation ----------
print("\n[TEST 4] REMEDIATION")
lesson, c, state, diff = loop.next_lesson(syllabus)
loop.submit_feedback(c, False, time_taken=60, prev_state=state, difficulty=diff)
lesson, c2, state2, diff2 = loop.next_lesson(syllabus)
print("Difficulty after failure:", diff2)

# ---------- Test 5: Mastery Growth ----------
print("\n[TEST 5] MASTERY GROWTH")
loop.submit_feedback(c, True, time_taken=5, prev_state=state2, difficulty=diff2)
print("Mastery:", learner.get_mastery(c))
