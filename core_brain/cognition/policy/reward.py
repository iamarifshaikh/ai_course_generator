def reward(correct, time_taken, recall_gain):
    if correct and time_taken < 15: return 3
    if correct: return 1
    return -2
