from core_brain.extractor.concept_extractor import extract_concepts
from core_brain.extractor.prereq_builder import build_prereqs
from core_brain.compiler.dynamic_compiler import DynamicCurriculumCompiler
from core_brain.compiler.edge_normalizer import normalize_edges
from core_brain.graph.loader import ConceptGraph
from core_brain.graph.schema import Concept


class BrainOrchestrator:
    def __init__(self, compiler_llm, teacher_llm, learner, memory):
        self.compiler_llm = compiler_llm
        self.teacher_llm  = teacher_llm
        self.learner = learner
        self.memory = memory
        self.graph = ConceptGraph()
        self.compiler = DynamicCurriculumCompiler(learner, memory)

    def build_course(self, topic: str):
        concepts = extract_concepts(self.compiler_llm, topic)
        prereqs  = build_prereqs(self.compiler_llm, concepts)
        raw = build_prereqs(self.compiler_llm, concepts)
        prereqs = normalize_edges(raw, concepts)

        for c in concepts:
            self.graph.add_concept(Concept(**c))

        for e in prereqs:
            if isinstance(e, dict) and "from" in e and "to" in e:
                self.graph.add_prereq(e["from"], e["to"])


        return self.compiler.compile(concepts, prereqs)
