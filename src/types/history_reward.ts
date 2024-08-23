import type Reward from './reward'
import type User from './user'

export default interface HistoryReward {
  historyRewardId: number
  historyRewardDate: Date
  user: User
  reward: Reward
}
