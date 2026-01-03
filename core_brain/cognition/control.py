class CognitivePID:
    def __init__(self, target_load=0.65):
        self.target = target_load
        self.integral = 0
        self.last_error = 0

    def control(self, measured_load):
        error = self.target - measured_load
        self.integral += error
        derivative = error - self.last_error
        self.last_error = error
        return 0.4*error + 0.3*self.integral + 0.3*derivative