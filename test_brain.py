from core_brain.llm.gemini import GeminiLLM

from core_brain.cognition.learner import CognitiveLearner
from core_brain.cognition.spaced import MemoryScheduler

from core_brain.orchestrator import BrainOrchestrator
from core_brain.loop import LearningLoop

from core_brain.rag.store import init_collection, upsert
from core_brain.extractor.chunker import chunk_text
from core_brain.rag.embedder import embed


init_collection()

seed_text = """
Python is a programming language.
Variables store data.
Loops allow repeating execution.
Functions group code.
"""

chunks = chunk_text(seed_text)
embeddings = embed(chunks)
upsert(chunks, embeddings)

llm = GeminiLLM(api_key="AIzaSyAql1JDUsJeK5DArhiuip-Ep4HZb-fk6GU")

learner = CognitiveLearner()
memory = MemoryScheduler()

brain = BrainOrchestrator(llm, learner, memory)

profile = {
    "tone": "friendly",
    "lesson_size": "small",
    "visual_density": "high",
    "quiz_strictness": "medium",
    "assignments": True
}

loop = LearningLoop(brain, llm, learner, memory, profile)

print("\nBuilding course...")
syllabus = brain.build_course("Python basics")
print("Syllabus:", syllabus)

print("\nLesson 1")
lesson, concept, state, difficulty = loop.next_lesson(syllabus)
print(lesson[:1200])

print("\nSimulating feedback...")
loop.submit_feedback(concept, True, time_taken=12, prev_state=state, difficulty=difficulty)

print("\nLesson 2")
lesson, concept, state, difficulty = loop.next_lesson(syllabus)
print(lesson[:1200])