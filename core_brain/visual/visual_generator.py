from diffusers import StableDiffusionPipeline
import torch

class VisualBrain:
    def __init__(self, model="stabilityai/sdxl-turbo"):
        self.pipe = StableDiffusionPipeline.from_pretrained(
            model,
            torch_dtype=torch.float16
        ).to("cuda" if torch.cuda.is_available() else "cpu")

    def generate(self, prompt):
        image = self.pipe(prompt, num_inference_steps=2).images[0]
        return image