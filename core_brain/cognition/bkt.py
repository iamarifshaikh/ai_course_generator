class BKT:
    def __init__(self, p_init=0.2, p_learn=0.15, p_guess=0.2, p_slip=0.1):
        self.L = p_init
        self.T = p_learn
        self.G = p_guess
        self.S = p_slip

    @property
    def knowledge(self):
        return self.L

    def update(self, correct: bool):
        if correct:
            self.L = (self.L*(1-self.S)) / (self.L*(1-self.S)+(1-self.L)*self.G)
        else:
            self.L = (self.L*self.S) / (self.L*self.S+(1-self.L)*(1-self.G))
        self.L = self.L + (1-self.L)*self.T
        return self.L