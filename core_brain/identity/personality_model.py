class TeachingPersonality:
    def __init__(self):
        self.pacing = 0.5
        self.visual = 0.5
        self.repetition = 0.5

    def tune(self, fingerprint):
        self.pacing = 1 - fingerprint.speed
        self.visual = fingerprint.visual_bias
        self.repetition = fingerprint.confusion
