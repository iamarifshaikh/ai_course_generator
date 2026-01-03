class CognitiveFingerprint:
    def __init__(self):
        self.speed = 0.5
        self.confusion = 0.0
        self.retention = 0.5
        self.visual_bias = 0.5
        self.practice_bias = 0.5

    def update(self, correct, time_taken, archetype):
        if correct:
            self.retention += 0.03
        else:
            self.confusion += 0.05

        if time_taken < 15:
            self.speed += 0.02
        else:
            self.speed -= 0.02

        if archetype in ["abstraction_gap","transfer_failure"]:
            self.visual_bias += 0.05

        self._clamp()

    def _clamp(self):
        for k in vars(self):
            setattr(self, k, min(1,max(0,getattr(self,k))))
