import { motivation } from '$data';

export function getRandomMotivation() {
  const randomIndex = Math.floor(Math.random() * motivation.length);
  return motivation[randomIndex];
}
