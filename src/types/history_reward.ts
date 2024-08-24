import type Reward from './reward'
import type User from './user'

export default interface HistoryReward {
  historyRewardId: number
  historyRewardDate: Date
  usersId: number
  rewardsId: number
  users: User
  rewards: Reward
}
