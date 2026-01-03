from core_brain.llm.local import LocalLLM
from core_brain.cognition.learner import CognitiveLearner
from core_brain.cognition.spaced import MemoryScheduler
from core_brain.orchestrator import BrainOrchestrator
from core_brain.loop import LearningLoop

print("\n=== NEUROCOURSE COGNITIVE TEST ===")

llm = LocalLLM("Qwen/Qwen2.5-0.5B-Instruct")
learner = CognitiveLearner()
memory = MemoryScheduler()
brain = BrainOrchestrator(llm, llm, learner, memory)

profile = {
    "tone": "friendly",
    "lesson_size": "medium",
    "visual_density": "medium",
    "quiz_strictness": "medium",
    "assignments": True
}

loop = LearningLoop(brain, learner, memory, profile)

topic = input("\nWhat do you want to learn? >> ")
syllabus = brain.build_course(topic)

while True:
    out = loop.next_step(syllabus, confusion=0.0, fatigue=0.2)
    if out["phase"] == "complete":
        print("\nCOURSE COMPLETE")
        break

    print(f"\n[{out['phase'].upper()}] {out['concept']}")
    print(out["content"])

    if out["phase"] == "socratic":
        answer = input(">> ")
        loop.submit_feedback(out["concept"], False, 25, answer, "normal")

    if out["phase"] == "teach":
        cmd = input("\nType NEXT / CONFUSED / EXIT >> ").lower()
        if cmd == "confused":
            loop.submit_feedback(out["concept"], False, 40, "confused", "normal")
        elif cmd == "next":
            continue
        else:
            break

    if out["phase"] == "assess":
        ans = input("\nYour answer >> ")
        correct = len(ans.strip()) > 5
        loop.submit_feedback(out["concept"], correct, 20, ans, "normal")