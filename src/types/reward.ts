export default interface Reward {
  rewardId: number

  rewardName: string

  rewardDescription: string

  rewardPaypoint: number

  rewardStartDate: Date

  rewardEndDate: Date

  rewardDate?: Date

  rewardImg: string

  rewardAmount: number
}
