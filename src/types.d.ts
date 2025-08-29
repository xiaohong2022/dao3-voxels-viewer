type VoxelsGroup = [string, VoxelInfo[]]

/** 0: 方块名, 1：贴图信息 */
type VoxelInfo = [string, [VoxelTexture, VoxelTexture, VoxelTexture, VoxelTexture, VoxelTexture, VoxelTexture][]]

/** 0: 贴图位移（xpx ypx） 1: 阴影 2: 液体方块的颜色, 或为 initial */
type VoxelTexture = [string, string, string | 'initial']