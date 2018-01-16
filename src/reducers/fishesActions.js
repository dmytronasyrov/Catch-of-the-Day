export function addFish (fish) {
  return { type: 'FISH_ADD', fish };
}

export function updateFish (key, fish) {
  return { type: 'FISH_UPDATE', key, fish };
}

export function removeFish (key) {
  return { type: 'FISH_REMOVE', key };
}

export function loadSamples () {
  return { type: 'FISH_SAMPLES' };
}
