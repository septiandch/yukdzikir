import type { DzikrItem } from '$lib/types/dzikr-item';
import { dzikrAfterPray } from './dzikr-afterpray';
import { dzikrEvening } from './dzikr-evening';
import { dzikrMorning } from './dzikr-morning';

export { motivation } from './motivation';

const dzikrItems: Record<string, DzikrItem[]> = {
  afterpray: dzikrAfterPray,
  evening: dzikrEvening,
  morning: dzikrMorning
};

export default dzikrItems;
