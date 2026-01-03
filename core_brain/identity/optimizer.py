class TeachingOptimizer:
    def optimize(self, pedagogy, personality):
        pedagogy["lesson_size"] = "small" if personality.pacing > 0.6 else "medium"
        pedagogy["visual_density"] = "high" if personality.visual > 0.6 else "medium"
        pedagogy["repetition"] = personality.repetition
        return pedagogy
