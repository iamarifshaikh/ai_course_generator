import math

def probability_correct(theta, difficulty):
    return 1 / (1 + math.exp(-(theta - difficulty)))