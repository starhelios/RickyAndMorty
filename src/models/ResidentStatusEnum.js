import { colors } from "../styles/colors"

export const ResidentStatusEnum = Object.freeze({
    Dead: "Dead",
    Alive: "Alive",
    Unknown: "unknown"
})

export const ResidentStatusColorMapper = Object.freeze({
    [ResidentStatusEnum.Dead]: colors.deadColor,
    [ResidentStatusEnum.Alive]: colors.aliveColor,
    [ResidentStatusEnum.Unknown]: colors.unknownColor,
})