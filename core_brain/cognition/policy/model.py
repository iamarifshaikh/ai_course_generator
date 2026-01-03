import torch
import torch.nn as nn
import torch.nn.functional as F

class TeachingPolicy(nn.Module):
    def __init__(self):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(4, 64),
            nn.ReLU(),
            nn.Linear(64, 3)
        )

    def forward(self, state):
        return F.softmax(self.net(state), dim=-1)
