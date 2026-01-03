import random
import torch

ACTIONS = ["easy","normal","hard"]

def choose_action(policy, state, eps=0.1):
    if random.random() < eps:
        return random.choice(ACTIONS)
    probs = policy(torch.tensor(state))
    return ACTIONS[torch.argmax(probs).item()]
