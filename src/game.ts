import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../c1e126e7-374e-4fe3-aaae-b4211c321cf3/src/item"
import Script2 from "../01f6d689-02bc-4261-9807-582f96a4ec73/src/item"
import Script3 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script4 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script5 from "../8bd080c9-9954-43b2-a6ac-0b0913d298c0/src/item"
import Script6 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script7 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const windowFullWall16 = new Entity('windowFullWall16')
engine.addEntity(windowFullWall16)
windowFullWall16.setParent(_scene)
const gltfShape = new GLTFShape("models/FullWallWindow.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
windowFullWall16.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(0, 0.00000286102294921875, 31.69772720336914),
  rotation: new Quaternion(-3.4030027229556715e-15, -1, 1.1920926112907182e-7, 1.4901159772762185e-7),
  scale: new Vector3(3.637406349182129, 6.006519794464111, 1.000005841255188)
})
windowFullWall16.addComponentOrReplace(transform2)

const neonTubeBlue = new Entity('neonTubeBlue')
engine.addEntity(neonTubeBlue)
neonTubeBlue.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(0.999995231628418, 26.40033721923828, 0.7500019073486328),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(59.80570983886719, -4.27242374420166, 1.0000016689300537)
})
neonTubeBlue.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/Neon_Tube_Blue.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
neonTubeBlue.addComponentOrReplace(gltfShape2)

const galleryInfoBlack = new Entity('galleryInfoBlack')
engine.addEntity(galleryInfoBlack)
galleryInfoBlack.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(15, 9.5367431640625e-7, 14),
  rotation: new Quaternion(-1.1233005357044051e-14, 0.7071067094802856, -8.429367426288081e-8, -0.70710688829422),
  scale: new Vector3(3.0828607082366943, 2.249000072479248, 1)
})
galleryInfoBlack.addComponentOrReplace(transform4)

const galleryInfoTurquoise = new Entity('galleryInfoTurquoise')
engine.addEntity(galleryInfoTurquoise)
galleryInfoTurquoise.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(15, 0, 6.5),
  rotation: new Quaternion(-1.221883248776073e-15, -0.7071067094802856, 8.429367426288081e-8, 0.70710688829422),
  scale: new Vector3(2.5078237056732178, 2.253687858581543, 1)
})
galleryInfoTurquoise.addComponentOrReplace(transform5)

const neonTubeBlue2 = new Entity('neonTubeBlue2')
engine.addEntity(neonTubeBlue2)
neonTubeBlue2.setParent(_scene)
neonTubeBlue2.addComponentOrReplace(gltfShape2)
const transform6 = new Transform({
  position: new Vector3(0.9999942779541016, 4.128256320953369, 0.7500028610229492),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(59.80570983886719, -4.27242374420166, 1.0000016689300537)
})
neonTubeBlue2.addComponentOrReplace(transform6)

const neonTubeBlue3 = new Entity('neonTubeBlue3')
engine.addEntity(neonTubeBlue3)
neonTubeBlue3.setParent(_scene)
neonTubeBlue3.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(15.999994277954102, 7.9484100341796875, 0.8100461959838867),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(59.80570983886719, -4.27242374420166, 1.0000016689300537)
})
neonTubeBlue3.addComponentOrReplace(transform7)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(0.49999523162841797, 8.499999046325684, 3.6150083541870117),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame.addComponentOrReplace(transform8)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(0.4999980926513672, 8.5, 9.615008354187012),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame2.addComponentOrReplace(transform9)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(0.5, 8.500000953674316, 15.551373481750488),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame3.addComponentOrReplace(transform10)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(0.5000019073486328, 8.500001907348633, 21.615009307861328),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame4.addComponentOrReplace(transform11)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(0.5000038146972656, 8.500001907348633, 27.615009307861328),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame5.addComponentOrReplace(transform12)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(0.49999427795410156, 1.7996582984924316, 3.615009307861328),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame6.addComponentOrReplace(transform13)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(0.4999961853027344, 1.7996587753295898, 9.615009307861328),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame7.addComponentOrReplace(transform14)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(0.4999990463256836, 1.7996597290039062, 15.551374435424805),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame8.addComponentOrReplace(transform15)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(0.5000009536743164, 1.7996602058410645, 21.615009307861328),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame9.addComponentOrReplace(transform16)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(0.5000028610229492, 1.7996611595153809, 27.615009307861328),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame10.addComponentOrReplace(transform17)

const concrete = new Entity('concrete')
engine.addEntity(concrete)
concrete.setParent(_scene)
const gltfShape3 = new GLTFShape("models/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
concrete.addComponentOrReplace(gltfShape3)
const transform18 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete.addComponentOrReplace(transform18)

const concrete2 = new Entity('concrete2')
engine.addEntity(concrete2)
concrete2.setParent(_scene)
concrete2.addComponentOrReplace(gltfShape3)
const transform19 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete2.addComponentOrReplace(transform19)

const hexagonalFloorPanel = new Entity('hexagonalFloorPanel')
engine.addEntity(hexagonalFloorPanel)
hexagonalFloorPanel.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(12, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
hexagonalFloorPanel.addComponentOrReplace(transform20)
const gltfShape4 = new GLTFShape("models/FloorHexa_01/FloorHexa_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
hexagonalFloorPanel.addComponentOrReplace(gltfShape4)

const wallPlainBlack = new Entity('wallPlainBlack')
engine.addEntity(wallPlainBlack)
wallPlainBlack.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(0, 0, 32),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
wallPlainBlack.addComponentOrReplace(transform21)
const gltfShape5 = new GLTFShape("models/PlainBlackWall.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
wallPlainBlack.addComponentOrReplace(gltfShape5)

const wallPlainBlack2 = new Entity('wallPlainBlack2')
engine.addEntity(wallPlainBlack2)
wallPlainBlack2.setParent(_scene)
wallPlainBlack2.addComponentOrReplace(gltfShape5)
const transform22 = new Transform({
  position: new Vector3(0, 0, 30),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
wallPlainBlack2.addComponentOrReplace(transform22)

const wallPlainBlack3 = new Entity('wallPlainBlack3')
engine.addEntity(wallPlainBlack3)
wallPlainBlack3.setParent(_scene)
wallPlainBlack3.addComponentOrReplace(gltfShape5)
const transform23 = new Transform({
  position: new Vector3(0, 0, 28),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
wallPlainBlack3.addComponentOrReplace(transform23)

const wallPlainBlack4 = new Entity('wallPlainBlack4')
engine.addEntity(wallPlainBlack4)
wallPlainBlack4.setParent(_scene)
wallPlainBlack4.addComponentOrReplace(gltfShape5)
const transform24 = new Transform({
  position: new Vector3(0, 0, 26),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
wallPlainBlack4.addComponentOrReplace(transform24)

const wallPlainBlack5 = new Entity('wallPlainBlack5')
engine.addEntity(wallPlainBlack5)
wallPlainBlack5.setParent(_scene)
wallPlainBlack5.addComponentOrReplace(gltfShape5)
const transform25 = new Transform({
  position: new Vector3(0, 0, 24),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
wallPlainBlack5.addComponentOrReplace(transform25)

const wallPlainBlack6 = new Entity('wallPlainBlack6')
engine.addEntity(wallPlainBlack6)
wallPlainBlack6.setParent(_scene)
wallPlainBlack6.addComponentOrReplace(gltfShape5)
const transform26 = new Transform({
  position: new Vector3(0, 0, 22),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
wallPlainBlack6.addComponentOrReplace(transform26)

const wallPlainBlack7 = new Entity('wallPlainBlack7')
engine.addEntity(wallPlainBlack7)
wallPlainBlack7.setParent(_scene)
wallPlainBlack7.addComponentOrReplace(gltfShape5)
const transform27 = new Transform({
  position: new Vector3(0, 0, 20),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
wallPlainBlack7.addComponentOrReplace(transform27)

const wallPlainBlack8 = new Entity('wallPlainBlack8')
engine.addEntity(wallPlainBlack8)
wallPlainBlack8.setParent(_scene)
wallPlainBlack8.addComponentOrReplace(gltfShape5)
const transform28 = new Transform({
  position: new Vector3(0, 0, 18),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainBlack8.addComponentOrReplace(transform28)

const wallPlainBlack9 = new Entity('wallPlainBlack9')
engine.addEntity(wallPlainBlack9)
wallPlainBlack9.setParent(_scene)
wallPlainBlack9.addComponentOrReplace(gltfShape5)
const transform29 = new Transform({
  position: new Vector3(0, 0, 16),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainBlack9.addComponentOrReplace(transform29)

const wallPlainBlack10 = new Entity('wallPlainBlack10')
engine.addEntity(wallPlainBlack10)
wallPlainBlack10.setParent(_scene)
wallPlainBlack10.addComponentOrReplace(gltfShape5)
const transform30 = new Transform({
  position: new Vector3(0, 0, 14),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
wallPlainBlack10.addComponentOrReplace(transform30)

const wallPlainBlack11 = new Entity('wallPlainBlack11')
engine.addEntity(wallPlainBlack11)
wallPlainBlack11.setParent(_scene)
wallPlainBlack11.addComponentOrReplace(gltfShape5)
const transform31 = new Transform({
  position: new Vector3(0, 0, 12),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
wallPlainBlack11.addComponentOrReplace(transform31)

const wallPlainBlack12 = new Entity('wallPlainBlack12')
engine.addEntity(wallPlainBlack12)
wallPlainBlack12.setParent(_scene)
wallPlainBlack12.addComponentOrReplace(gltfShape5)
const transform32 = new Transform({
  position: new Vector3(0, 0, 10),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
wallPlainBlack12.addComponentOrReplace(transform32)

const wallPlainBlack13 = new Entity('wallPlainBlack13')
engine.addEntity(wallPlainBlack13)
wallPlainBlack13.setParent(_scene)
wallPlainBlack13.addComponentOrReplace(gltfShape5)
const transform33 = new Transform({
  position: new Vector3(0, 0, 8),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
wallPlainBlack13.addComponentOrReplace(transform33)

const wallPlainBlack14 = new Entity('wallPlainBlack14')
engine.addEntity(wallPlainBlack14)
wallPlainBlack14.setParent(_scene)
wallPlainBlack14.addComponentOrReplace(gltfShape5)
const transform34 = new Transform({
  position: new Vector3(0, 0, 6),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
wallPlainBlack14.addComponentOrReplace(transform34)

const wallPlainBlack15 = new Entity('wallPlainBlack15')
engine.addEntity(wallPlainBlack15)
wallPlainBlack15.setParent(_scene)
wallPlainBlack15.addComponentOrReplace(gltfShape5)
const transform35 = new Transform({
  position: new Vector3(0, 0, 4),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656)
})
wallPlainBlack15.addComponentOrReplace(transform35)

const wallPlainBlack16 = new Entity('wallPlainBlack16')
engine.addEntity(wallPlainBlack16)
wallPlainBlack16.setParent(_scene)
wallPlainBlack16.addComponentOrReplace(gltfShape5)
const transform36 = new Transform({
  position: new Vector3(0, 0, 4),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656)
})
wallPlainBlack16.addComponentOrReplace(transform36)

const wallPlainBlack17 = new Entity('wallPlainBlack17')
engine.addEntity(wallPlainBlack17)
wallPlainBlack17.setParent(_scene)
wallPlainBlack17.addComponentOrReplace(gltfShape5)
const transform37 = new Transform({
  position: new Vector3(0, 0, 2),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447)
})
wallPlainBlack17.addComponentOrReplace(transform37)

const wallPlainBlack18 = new Entity('wallPlainBlack18')
engine.addEntity(wallPlainBlack18)
wallPlainBlack18.setParent(_scene)
wallPlainBlack18.addComponentOrReplace(gltfShape5)
const transform38 = new Transform({
  position: new Vector3(0, 4, 32),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
wallPlainBlack18.addComponentOrReplace(transform38)

const wallPlainBlack19 = new Entity('wallPlainBlack19')
engine.addEntity(wallPlainBlack19)
wallPlainBlack19.setParent(_scene)
wallPlainBlack19.addComponentOrReplace(gltfShape5)
const transform39 = new Transform({
  position: new Vector3(0, 4, 30),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
wallPlainBlack19.addComponentOrReplace(transform39)

const wallPlainBlack20 = new Entity('wallPlainBlack20')
engine.addEntity(wallPlainBlack20)
wallPlainBlack20.setParent(_scene)
wallPlainBlack20.addComponentOrReplace(gltfShape5)
const transform40 = new Transform({
  position: new Vector3(0, 4, 28),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
wallPlainBlack20.addComponentOrReplace(transform40)

const wallPlainBlack21 = new Entity('wallPlainBlack21')
engine.addEntity(wallPlainBlack21)
wallPlainBlack21.setParent(_scene)
wallPlainBlack21.addComponentOrReplace(gltfShape5)
const transform41 = new Transform({
  position: new Vector3(0, 4, 26),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
wallPlainBlack21.addComponentOrReplace(transform41)

const wallPlainBlack22 = new Entity('wallPlainBlack22')
engine.addEntity(wallPlainBlack22)
wallPlainBlack22.setParent(_scene)
wallPlainBlack22.addComponentOrReplace(gltfShape5)
const transform42 = new Transform({
  position: new Vector3(0, 4, 24),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
wallPlainBlack22.addComponentOrReplace(transform42)

const wallPlainBlack23 = new Entity('wallPlainBlack23')
engine.addEntity(wallPlainBlack23)
wallPlainBlack23.setParent(_scene)
wallPlainBlack23.addComponentOrReplace(gltfShape5)
const transform43 = new Transform({
  position: new Vector3(0, 4, 22),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
wallPlainBlack23.addComponentOrReplace(transform43)

const wallPlainBlack24 = new Entity('wallPlainBlack24')
engine.addEntity(wallPlainBlack24)
wallPlainBlack24.setParent(_scene)
wallPlainBlack24.addComponentOrReplace(gltfShape5)
const transform44 = new Transform({
  position: new Vector3(0, 4, 20),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainBlack24.addComponentOrReplace(transform44)

const wallPlainBlack25 = new Entity('wallPlainBlack25')
engine.addEntity(wallPlainBlack25)
wallPlainBlack25.setParent(_scene)
wallPlainBlack25.addComponentOrReplace(gltfShape5)
const transform45 = new Transform({
  position: new Vector3(0, 4, 18),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainBlack25.addComponentOrReplace(transform45)

const wallPlainBlack26 = new Entity('wallPlainBlack26')
engine.addEntity(wallPlainBlack26)
wallPlainBlack26.setParent(_scene)
wallPlainBlack26.addComponentOrReplace(gltfShape5)
const transform46 = new Transform({
  position: new Vector3(0, 4, 16),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
wallPlainBlack26.addComponentOrReplace(transform46)

const wallPlainBlack27 = new Entity('wallPlainBlack27')
engine.addEntity(wallPlainBlack27)
wallPlainBlack27.setParent(_scene)
wallPlainBlack27.addComponentOrReplace(gltfShape5)
const transform47 = new Transform({
  position: new Vector3(0, 4, 14),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
wallPlainBlack27.addComponentOrReplace(transform47)

const wallPlainBlack29 = new Entity('wallPlainBlack29')
engine.addEntity(wallPlainBlack29)
wallPlainBlack29.setParent(_scene)
wallPlainBlack29.addComponentOrReplace(gltfShape5)
const transform48 = new Transform({
  position: new Vector3(0, 12, 10),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656)
})
wallPlainBlack29.addComponentOrReplace(transform48)

const wallPlainBlack30 = new Entity('wallPlainBlack30')
engine.addEntity(wallPlainBlack30)
wallPlainBlack30.setParent(_scene)
wallPlainBlack30.addComponentOrReplace(gltfShape5)
const transform49 = new Transform({
  position: new Vector3(0, 12, 8),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447)
})
wallPlainBlack30.addComponentOrReplace(transform49)

const wallPlainBlack31 = new Entity('wallPlainBlack31')
engine.addEntity(wallPlainBlack31)
wallPlainBlack31.setParent(_scene)
wallPlainBlack31.addComponentOrReplace(gltfShape5)
const transform50 = new Transform({
  position: new Vector3(0, 4, 6),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656)
})
wallPlainBlack31.addComponentOrReplace(transform50)

const wallPlainBlack32 = new Entity('wallPlainBlack32')
engine.addEntity(wallPlainBlack32)
wallPlainBlack32.setParent(_scene)
wallPlainBlack32.addComponentOrReplace(gltfShape5)
const transform51 = new Transform({
  position: new Vector3(0, 4, 4),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447)
})
wallPlainBlack32.addComponentOrReplace(transform51)

const wallPlainBlack33 = new Entity('wallPlainBlack33')
engine.addEntity(wallPlainBlack33)
wallPlainBlack33.setParent(_scene)
wallPlainBlack33.addComponentOrReplace(gltfShape5)
const transform52 = new Transform({
  position: new Vector3(0, 12, 2),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004768371582, 1, 1.000004768371582)
})
wallPlainBlack33.addComponentOrReplace(transform52)

const wallPlainBlack34 = new Entity('wallPlainBlack34')
engine.addEntity(wallPlainBlack34)
wallPlainBlack34.setParent(_scene)
wallPlainBlack34.addComponentOrReplace(gltfShape5)
const transform53 = new Transform({
  position: new Vector3(0, 8, 32),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
wallPlainBlack34.addComponentOrReplace(transform53)

const wallPlainBlack35 = new Entity('wallPlainBlack35')
engine.addEntity(wallPlainBlack35)
wallPlainBlack35.setParent(_scene)
wallPlainBlack35.addComponentOrReplace(gltfShape5)
const transform54 = new Transform({
  position: new Vector3(0, 8, 30),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
wallPlainBlack35.addComponentOrReplace(transform54)

const wallPlainBlack36 = new Entity('wallPlainBlack36')
engine.addEntity(wallPlainBlack36)
wallPlainBlack36.setParent(_scene)
wallPlainBlack36.addComponentOrReplace(gltfShape5)
const transform55 = new Transform({
  position: new Vector3(0, 8, 28),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
wallPlainBlack36.addComponentOrReplace(transform55)

const wallPlainBlack37 = new Entity('wallPlainBlack37')
engine.addEntity(wallPlainBlack37)
wallPlainBlack37.setParent(_scene)
wallPlainBlack37.addComponentOrReplace(gltfShape5)
const transform56 = new Transform({
  position: new Vector3(0, 8, 26),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
wallPlainBlack37.addComponentOrReplace(transform56)

const wallPlainBlack38 = new Entity('wallPlainBlack38')
engine.addEntity(wallPlainBlack38)
wallPlainBlack38.setParent(_scene)
wallPlainBlack38.addComponentOrReplace(gltfShape5)
const transform57 = new Transform({
  position: new Vector3(0, 8, 24),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
wallPlainBlack38.addComponentOrReplace(transform57)

const wallPlainBlack39 = new Entity('wallPlainBlack39')
engine.addEntity(wallPlainBlack39)
wallPlainBlack39.setParent(_scene)
wallPlainBlack39.addComponentOrReplace(gltfShape5)
const transform58 = new Transform({
  position: new Vector3(0, 8, 22),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainBlack39.addComponentOrReplace(transform58)

const wallPlainBlack40 = new Entity('wallPlainBlack40')
engine.addEntity(wallPlainBlack40)
wallPlainBlack40.setParent(_scene)
wallPlainBlack40.addComponentOrReplace(gltfShape5)
const transform59 = new Transform({
  position: new Vector3(0, 12, 20),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
wallPlainBlack40.addComponentOrReplace(transform59)

const wallPlainBlack41 = new Entity('wallPlainBlack41')
engine.addEntity(wallPlainBlack41)
wallPlainBlack41.setParent(_scene)
wallPlainBlack41.addComponentOrReplace(gltfShape5)
const transform60 = new Transform({
  position: new Vector3(0, 12, 18),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
wallPlainBlack41.addComponentOrReplace(transform60)

const wallPlainBlack42 = new Entity('wallPlainBlack42')
engine.addEntity(wallPlainBlack42)
wallPlainBlack42.setParent(_scene)
wallPlainBlack42.addComponentOrReplace(gltfShape5)
const transform61 = new Transform({
  position: new Vector3(0, 12, 16),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
wallPlainBlack42.addComponentOrReplace(transform61)

const wallPlainBlack43 = new Entity('wallPlainBlack43')
engine.addEntity(wallPlainBlack43)
wallPlainBlack43.setParent(_scene)
wallPlainBlack43.addComponentOrReplace(gltfShape5)
const transform62 = new Transform({
  position: new Vector3(0, 12, 14),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
wallPlainBlack43.addComponentOrReplace(transform62)

const wallPlainBlack44 = new Entity('wallPlainBlack44')
engine.addEntity(wallPlainBlack44)
wallPlainBlack44.setParent(_scene)
wallPlainBlack44.addComponentOrReplace(gltfShape5)
const transform63 = new Transform({
  position: new Vector3(0, 8, 12),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
wallPlainBlack44.addComponentOrReplace(transform63)

const wallPlainBlack45 = new Entity('wallPlainBlack45')
engine.addEntity(wallPlainBlack45)
wallPlainBlack45.setParent(_scene)
wallPlainBlack45.addComponentOrReplace(gltfShape5)
const transform64 = new Transform({
  position: new Vector3(0, 4, 10),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
wallPlainBlack45.addComponentOrReplace(transform64)

const wallPlainBlack46 = new Entity('wallPlainBlack46')
engine.addEntity(wallPlainBlack46)
wallPlainBlack46.setParent(_scene)
wallPlainBlack46.addComponentOrReplace(gltfShape5)
const transform65 = new Transform({
  position: new Vector3(0, 4, 8),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
wallPlainBlack46.addComponentOrReplace(transform65)

const wallPlainBlack47 = new Entity('wallPlainBlack47')
engine.addEntity(wallPlainBlack47)
wallPlainBlack47.setParent(_scene)
wallPlainBlack47.addComponentOrReplace(gltfShape5)
const transform66 = new Transform({
  position: new Vector3(0, 12, 6),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238)
})
wallPlainBlack47.addComponentOrReplace(transform66)

const wallPlainBlack48 = new Entity('wallPlainBlack48')
engine.addEntity(wallPlainBlack48)
wallPlainBlack48.setParent(_scene)
wallPlainBlack48.addComponentOrReplace(gltfShape5)
const transform67 = new Transform({
  position: new Vector3(0, 12, 4),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004529953003, 1, 1.000004529953003)
})
wallPlainBlack48.addComponentOrReplace(transform67)

const wallPlainBlack49 = new Entity('wallPlainBlack49')
engine.addEntity(wallPlainBlack49)
wallPlainBlack49.setParent(_scene)
wallPlainBlack49.addComponentOrReplace(gltfShape5)
const transform68 = new Transform({
  position: new Vector3(0, 4, 2),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238)
})
wallPlainBlack49.addComponentOrReplace(transform68)

const wallPlainBlack28 = new Entity('wallPlainBlack28')
engine.addEntity(wallPlainBlack28)
wallPlainBlack28.setParent(_scene)
wallPlainBlack28.addComponentOrReplace(gltfShape5)
const transform69 = new Transform({
  position: new Vector3(0, 4, 12),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
wallPlainBlack28.addComponentOrReplace(transform69)

const wallPlainBlack50 = new Entity('wallPlainBlack50')
engine.addEntity(wallPlainBlack50)
wallPlainBlack50.setParent(_scene)
wallPlainBlack50.addComponentOrReplace(gltfShape5)
const transform70 = new Transform({
  position: new Vector3(0, 12, 32),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
wallPlainBlack50.addComponentOrReplace(transform70)

const wallPlainBlack51 = new Entity('wallPlainBlack51')
engine.addEntity(wallPlainBlack51)
wallPlainBlack51.setParent(_scene)
wallPlainBlack51.addComponentOrReplace(gltfShape5)
const transform71 = new Transform({
  position: new Vector3(0, 12, 30),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
wallPlainBlack51.addComponentOrReplace(transform71)

const wallPlainBlack52 = new Entity('wallPlainBlack52')
engine.addEntity(wallPlainBlack52)
wallPlainBlack52.setParent(_scene)
wallPlainBlack52.addComponentOrReplace(gltfShape5)
const transform72 = new Transform({
  position: new Vector3(0, 12, 28),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
wallPlainBlack52.addComponentOrReplace(transform72)

const wallPlainBlack53 = new Entity('wallPlainBlack53')
engine.addEntity(wallPlainBlack53)
wallPlainBlack53.setParent(_scene)
wallPlainBlack53.addComponentOrReplace(gltfShape5)
const transform73 = new Transform({
  position: new Vector3(0, 12, 26),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
wallPlainBlack53.addComponentOrReplace(transform73)

const wallPlainBlack54 = new Entity('wallPlainBlack54')
engine.addEntity(wallPlainBlack54)
wallPlainBlack54.setParent(_scene)
wallPlainBlack54.addComponentOrReplace(gltfShape5)
const transform74 = new Transform({
  position: new Vector3(0, 12, 24),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainBlack54.addComponentOrReplace(transform74)

const wallPlainBlack55 = new Entity('wallPlainBlack55')
engine.addEntity(wallPlainBlack55)
wallPlainBlack55.setParent(_scene)
wallPlainBlack55.addComponentOrReplace(gltfShape5)
const transform75 = new Transform({
  position: new Vector3(0, 12, 22),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainBlack55.addComponentOrReplace(transform75)

const wallPlainBlack56 = new Entity('wallPlainBlack56')
engine.addEntity(wallPlainBlack56)
wallPlainBlack56.setParent(_scene)
wallPlainBlack56.addComponentOrReplace(gltfShape5)
const transform76 = new Transform({
  position: new Vector3(0, 8, 20),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainBlack56.addComponentOrReplace(transform76)

const wallPlainBlack57 = new Entity('wallPlainBlack57')
engine.addEntity(wallPlainBlack57)
wallPlainBlack57.setParent(_scene)
wallPlainBlack57.addComponentOrReplace(gltfShape5)
const transform77 = new Transform({
  position: new Vector3(0, 8, 16),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
wallPlainBlack57.addComponentOrReplace(transform77)

const wallPlainBlack58 = new Entity('wallPlainBlack58')
engine.addEntity(wallPlainBlack58)
wallPlainBlack58.setParent(_scene)
wallPlainBlack58.addComponentOrReplace(gltfShape5)
const transform78 = new Transform({
  position: new Vector3(0, 8, 18),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
wallPlainBlack58.addComponentOrReplace(transform78)

const wallPlainBlack59 = new Entity('wallPlainBlack59')
engine.addEntity(wallPlainBlack59)
wallPlainBlack59.setParent(_scene)
wallPlainBlack59.addComponentOrReplace(gltfShape5)
const transform79 = new Transform({
  position: new Vector3(0, 8, 14),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
wallPlainBlack59.addComponentOrReplace(transform79)

const wallPlainBlack60 = new Entity('wallPlainBlack60')
engine.addEntity(wallPlainBlack60)
wallPlainBlack60.setParent(_scene)
wallPlainBlack60.addComponentOrReplace(gltfShape5)
const transform80 = new Transform({
  position: new Vector3(0, 12, 12),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
wallPlainBlack60.addComponentOrReplace(transform80)

const wallPlainBlack61 = new Entity('wallPlainBlack61')
engine.addEntity(wallPlainBlack61)
wallPlainBlack61.setParent(_scene)
wallPlainBlack61.addComponentOrReplace(gltfShape5)
const transform81 = new Transform({
  position: new Vector3(0, 8, 10),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
wallPlainBlack61.addComponentOrReplace(transform81)

const wallPlainBlack62 = new Entity('wallPlainBlack62')
engine.addEntity(wallPlainBlack62)
wallPlainBlack62.setParent(_scene)
wallPlainBlack62.addComponentOrReplace(gltfShape5)
const transform82 = new Transform({
  position: new Vector3(0, 8, 8),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656)
})
wallPlainBlack62.addComponentOrReplace(transform82)

const wallPlainBlack63 = new Entity('wallPlainBlack63')
engine.addEntity(wallPlainBlack63)
wallPlainBlack63.setParent(_scene)
wallPlainBlack63.addComponentOrReplace(gltfShape5)
const transform83 = new Transform({
  position: new Vector3(0, 8, 6),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447)
})
wallPlainBlack63.addComponentOrReplace(transform83)

const wallPlainBlack64 = new Entity('wallPlainBlack64')
engine.addEntity(wallPlainBlack64)
wallPlainBlack64.setParent(_scene)
wallPlainBlack64.addComponentOrReplace(gltfShape5)
const transform84 = new Transform({
  position: new Vector3(0, 8, 4),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238)
})
wallPlainBlack64.addComponentOrReplace(transform84)

const wallPlainBlack65 = new Entity('wallPlainBlack65')
engine.addEntity(wallPlainBlack65)
wallPlainBlack65.setParent(_scene)
wallPlainBlack65.addComponentOrReplace(gltfShape5)
const transform85 = new Transform({
  position: new Vector3(0, 8, 2),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004529953003, 1, 1.000004529953003)
})
wallPlainBlack65.addComponentOrReplace(transform85)

const neonTubeBlue4 = new Entity('neonTubeBlue4')
engine.addEntity(neonTubeBlue4)
neonTubeBlue4.setParent(_scene)
neonTubeBlue4.addComponentOrReplace(gltfShape2)
const transform86 = new Transform({
  position: new Vector3(15.999994277954102, 8.948410034179688, 0.8100461959838867),
  rotation: new Quaternion(-8.810130503619459e-16, 0.70710688829422, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(59.80570983886719, -4.27242374420166, 1.0000016689300537)
})
neonTubeBlue4.addComponentOrReplace(transform86)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 0),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
wallPlainGlass2.addComponentOrReplace(transform87)
const gltfShape6 = new GLTFShape("models/PlainGlassWall.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
wallPlainGlass2.addComponentOrReplace(gltfShape6)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
wallPlainGlass3.addComponentOrReplace(gltfShape6)
const transform88 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 2),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
wallPlainGlass3.addComponentOrReplace(transform88)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
wallPlainGlass4.addComponentOrReplace(gltfShape6)
const transform89 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 4),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
wallPlainGlass4.addComponentOrReplace(transform89)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape6)
const transform90 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 6),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
wallPlainGlass5.addComponentOrReplace(transform90)

const wallPlainGlass6 = new Entity('wallPlainGlass6')
engine.addEntity(wallPlainGlass6)
wallPlainGlass6.setParent(_scene)
wallPlainGlass6.addComponentOrReplace(gltfShape6)
const transform91 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 8),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
wallPlainGlass6.addComponentOrReplace(transform91)

const wallPlainGlass7 = new Entity('wallPlainGlass7')
engine.addEntity(wallPlainGlass7)
wallPlainGlass7.setParent(_scene)
wallPlainGlass7.addComponentOrReplace(gltfShape6)
const transform92 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 10),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
wallPlainGlass7.addComponentOrReplace(transform92)

const wallPlainGlass8 = new Entity('wallPlainGlass8')
engine.addEntity(wallPlainGlass8)
wallPlainGlass8.setParent(_scene)
wallPlainGlass8.addComponentOrReplace(gltfShape6)
const transform93 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 12),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
wallPlainGlass8.addComponentOrReplace(transform93)

const wallPlainGlass9 = new Entity('wallPlainGlass9')
engine.addEntity(wallPlainGlass9)
wallPlainGlass9.setParent(_scene)
wallPlainGlass9.addComponentOrReplace(gltfShape6)
const transform94 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 14),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainGlass9.addComponentOrReplace(transform94)

const wallPlainGlass10 = new Entity('wallPlainGlass10')
engine.addEntity(wallPlainGlass10)
wallPlainGlass10.setParent(_scene)
wallPlainGlass10.addComponentOrReplace(gltfShape6)
const transform95 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 16),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainGlass10.addComponentOrReplace(transform95)

const wallPlainGlass11 = new Entity('wallPlainGlass11')
engine.addEntity(wallPlainGlass11)
wallPlainGlass11.setParent(_scene)
wallPlainGlass11.addComponentOrReplace(gltfShape6)
const transform96 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 18),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
wallPlainGlass11.addComponentOrReplace(transform96)

const wallPlainGlass12 = new Entity('wallPlainGlass12')
engine.addEntity(wallPlainGlass12)
wallPlainGlass12.setParent(_scene)
wallPlainGlass12.addComponentOrReplace(gltfShape6)
const transform97 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 20),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
wallPlainGlass12.addComponentOrReplace(transform97)

const wallPlainGlass13 = new Entity('wallPlainGlass13')
engine.addEntity(wallPlainGlass13)
wallPlainGlass13.setParent(_scene)
wallPlainGlass13.addComponentOrReplace(gltfShape6)
const transform98 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 22),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
wallPlainGlass13.addComponentOrReplace(transform98)

const wallPlainGlass14 = new Entity('wallPlainGlass14')
engine.addEntity(wallPlainGlass14)
wallPlainGlass14.setParent(_scene)
wallPlainGlass14.addComponentOrReplace(gltfShape6)
const transform99 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 24),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
wallPlainGlass14.addComponentOrReplace(transform99)

const wallPlainGlass15 = new Entity('wallPlainGlass15')
engine.addEntity(wallPlainGlass15)
wallPlainGlass15.setParent(_scene)
wallPlainGlass15.addComponentOrReplace(gltfShape6)
const transform100 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 26),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
wallPlainGlass15.addComponentOrReplace(transform100)

const wallPlainGlass16 = new Entity('wallPlainGlass16')
engine.addEntity(wallPlainGlass16)
wallPlainGlass16.setParent(_scene)
wallPlainGlass16.addComponentOrReplace(gltfShape6)
const transform101 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 28),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656)
})
wallPlainGlass16.addComponentOrReplace(transform101)

const wallPlainGlass17 = new Entity('wallPlainGlass17')
engine.addEntity(wallPlainGlass17)
wallPlainGlass17.setParent(_scene)
wallPlainGlass17.addComponentOrReplace(gltfShape6)
const transform102 = new Transform({
  position: new Vector3(16, 5.960464477539063e-8, 30),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447)
})
wallPlainGlass17.addComponentOrReplace(transform102)

const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
twitterButtonLink.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(15, 0, 17.5),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.574748992919922, 6.128199100494385, 3.955739974975586)
})
twitterButtonLink.addComponentOrReplace(transform103)

const discordButtonLink = new Entity('discordButtonLink')
engine.addEntity(discordButtonLink)
discordButtonLink.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(15, 0, 22.5),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.574747562408447, 6.128199100494385, 3.9557409286499023)
})
discordButtonLink.addComponentOrReplace(transform104)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(15, 2.3578024865855696e-7, 27.5),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.574742317199707, 7.5410542488098145, 3.9557437896728516)
})
externalLink.addComponentOrReplace(transform105)

const hexagonalFloorPanel2 = new Entity('hexagonalFloorPanel2')
engine.addEntity(hexagonalFloorPanel2)
hexagonalFloorPanel2.setParent(_scene)
hexagonalFloorPanel2.addComponentOrReplace(gltfShape4)
const transform106 = new Transform({
  position: new Vector3(12.5, 0, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
hexagonalFloorPanel2.addComponentOrReplace(transform106)

const neonTubeBlue5 = new Entity('neonTubeBlue5')
engine.addEntity(neonTubeBlue5)
neonTubeBlue5.setParent(_scene)
neonTubeBlue5.addComponentOrReplace(gltfShape2)
const transform107 = new Transform({
  position: new Vector3(1.4764819145202637, 26.40033721923828, 31.5),
  rotation: new Quaternion(5.396888211122667e-15, 1, -1.1920926823449918e-7, -1.4901159772762185e-7),
  scale: new Vector3(10.52531623840332, -4.27242374420166, 1.0000022649765015)
})
neonTubeBlue5.addComponentOrReplace(transform107)

const neonTubeBlue6 = new Entity('neonTubeBlue6')
engine.addEntity(neonTubeBlue6)
neonTubeBlue6.setParent(_scene)
neonTubeBlue6.addComponentOrReplace(gltfShape2)
const transform108 = new Transform({
  position: new Vector3(1.4764819145202637, 4.086855888366699, 31.5),
  rotation: new Quaternion(5.396888211122667e-15, 1, -1.1920926823449918e-7, -1.4901159772762185e-7),
  scale: new Vector3(10.52531623840332, -4.27242374420166, 1.0000022649765015)
})
neonTubeBlue6.addComponentOrReplace(transform108)

const windowBlackLarge = new Entity('windowBlackLarge')
engine.addEntity(windowBlackLarge)
windowBlackLarge.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(16, 0, 0.2979583740234375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 5.991962432861328, 1.000000238418579)
})
windowBlackLarge.addComponentOrReplace(transform109)
const gltfShape7 = new GLTFShape("models/BlackWindowLarge.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
windowBlackLarge.addComponentOrReplace(gltfShape7)

const wallPlainBlack66 = new Entity('wallPlainBlack66')
engine.addEntity(wallPlainBlack66)
wallPlainBlack66.setParent(_scene)
wallPlainBlack66.addComponentOrReplace(gltfShape5)
const transform110 = new Transform({
  position: new Vector3(0, 16, 26),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
wallPlainBlack66.addComponentOrReplace(transform110)

const wallPlainBlack67 = new Entity('wallPlainBlack67')
engine.addEntity(wallPlainBlack67)
wallPlainBlack67.setParent(_scene)
wallPlainBlack67.addComponentOrReplace(gltfShape5)
const transform111 = new Transform({
  position: new Vector3(0, 20, 26),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
wallPlainBlack67.addComponentOrReplace(transform111)

const wallPlainBlack68 = new Entity('wallPlainBlack68')
engine.addEntity(wallPlainBlack68)
wallPlainBlack68.setParent(_scene)
wallPlainBlack68.addComponentOrReplace(gltfShape5)
const transform112 = new Transform({
  position: new Vector3(0, 16, 28),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainBlack68.addComponentOrReplace(transform112)

const wallPlainBlack69 = new Entity('wallPlainBlack69')
engine.addEntity(wallPlainBlack69)
wallPlainBlack69.setParent(_scene)
wallPlainBlack69.addComponentOrReplace(gltfShape5)
const transform113 = new Transform({
  position: new Vector3(0, 20, 30),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainBlack69.addComponentOrReplace(transform113)

const wallPlainBlack70 = new Entity('wallPlainBlack70')
engine.addEntity(wallPlainBlack70)
wallPlainBlack70.setParent(_scene)
wallPlainBlack70.addComponentOrReplace(gltfShape5)
const transform114 = new Transform({
  position: new Vector3(0, 20, 32),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
wallPlainBlack70.addComponentOrReplace(transform114)

const wallPlainBlack71 = new Entity('wallPlainBlack71')
engine.addEntity(wallPlainBlack71)
wallPlainBlack71.setParent(_scene)
wallPlainBlack71.addComponentOrReplace(gltfShape5)
const transform115 = new Transform({
  position: new Vector3(0, 20, 28),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainBlack71.addComponentOrReplace(transform115)

const wallPlainBlack72 = new Entity('wallPlainBlack72')
engine.addEntity(wallPlainBlack72)
wallPlainBlack72.setParent(_scene)
wallPlainBlack72.addComponentOrReplace(gltfShape5)
const transform116 = new Transform({
  position: new Vector3(0, 16, 32),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
wallPlainBlack72.addComponentOrReplace(transform116)

const wallPlainBlack73 = new Entity('wallPlainBlack73')
engine.addEntity(wallPlainBlack73)
wallPlainBlack73.setParent(_scene)
wallPlainBlack73.addComponentOrReplace(gltfShape5)
const transform117 = new Transform({
  position: new Vector3(0, 16, 30),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
wallPlainBlack73.addComponentOrReplace(transform117)

const wallPlainBlack74 = new Entity('wallPlainBlack74')
engine.addEntity(wallPlainBlack74)
wallPlainBlack74.setParent(_scene)
wallPlainBlack74.addComponentOrReplace(gltfShape5)
const transform118 = new Transform({
  position: new Vector3(0, 20, 22),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainBlack74.addComponentOrReplace(transform118)

const wallPlainBlack75 = new Entity('wallPlainBlack75')
engine.addEntity(wallPlainBlack75)
wallPlainBlack75.setParent(_scene)
wallPlainBlack75.addComponentOrReplace(gltfShape5)
const transform119 = new Transform({
  position: new Vector3(0, 20, 24),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
wallPlainBlack75.addComponentOrReplace(transform119)

const wallPlainBlack76 = new Entity('wallPlainBlack76')
engine.addEntity(wallPlainBlack76)
wallPlainBlack76.setParent(_scene)
wallPlainBlack76.addComponentOrReplace(gltfShape5)
const transform120 = new Transform({
  position: new Vector3(0, 20, 20),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
wallPlainBlack76.addComponentOrReplace(transform120)

const wallPlainBlack77 = new Entity('wallPlainBlack77')
engine.addEntity(wallPlainBlack77)
wallPlainBlack77.setParent(_scene)
wallPlainBlack77.addComponentOrReplace(gltfShape5)
const transform121 = new Transform({
  position: new Vector3(0, 20, 18),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainBlack77.addComponentOrReplace(transform121)

const wallPlainBlack78 = new Entity('wallPlainBlack78')
engine.addEntity(wallPlainBlack78)
wallPlainBlack78.setParent(_scene)
wallPlainBlack78.addComponentOrReplace(gltfShape5)
const transform122 = new Transform({
  position: new Vector3(0, 16, 24),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
wallPlainBlack78.addComponentOrReplace(transform122)

const wallPlainBlack79 = new Entity('wallPlainBlack79')
engine.addEntity(wallPlainBlack79)
wallPlainBlack79.setParent(_scene)
wallPlainBlack79.addComponentOrReplace(gltfShape5)
const transform123 = new Transform({
  position: new Vector3(0, 16, 22),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainBlack79.addComponentOrReplace(transform123)

const wallPlainBlack80 = new Entity('wallPlainBlack80')
engine.addEntity(wallPlainBlack80)
wallPlainBlack80.setParent(_scene)
wallPlainBlack80.addComponentOrReplace(gltfShape5)
const transform124 = new Transform({
  position: new Vector3(0, 16, 20),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainBlack80.addComponentOrReplace(transform124)

const wallPlainBlack81 = new Entity('wallPlainBlack81')
engine.addEntity(wallPlainBlack81)
wallPlainBlack81.setParent(_scene)
wallPlainBlack81.addComponentOrReplace(gltfShape5)
const transform125 = new Transform({
  position: new Vector3(0, 16, 18),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
wallPlainBlack81.addComponentOrReplace(transform125)

const wallPlainBlack82 = new Entity('wallPlainBlack82')
engine.addEntity(wallPlainBlack82)
wallPlainBlack82.setParent(_scene)
wallPlainBlack82.addComponentOrReplace(gltfShape5)
const transform126 = new Transform({
  position: new Vector3(0, 20, 14),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
wallPlainBlack82.addComponentOrReplace(transform126)

const wallPlainBlack83 = new Entity('wallPlainBlack83')
engine.addEntity(wallPlainBlack83)
wallPlainBlack83.setParent(_scene)
wallPlainBlack83.addComponentOrReplace(gltfShape5)
const transform127 = new Transform({
  position: new Vector3(0, 20, 16),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainBlack83.addComponentOrReplace(transform127)

const wallPlainBlack84 = new Entity('wallPlainBlack84')
engine.addEntity(wallPlainBlack84)
wallPlainBlack84.setParent(_scene)
wallPlainBlack84.addComponentOrReplace(gltfShape5)
const transform128 = new Transform({
  position: new Vector3(0, 20, 12),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
wallPlainBlack84.addComponentOrReplace(transform128)

const wallPlainBlack85 = new Entity('wallPlainBlack85')
engine.addEntity(wallPlainBlack85)
wallPlainBlack85.setParent(_scene)
wallPlainBlack85.addComponentOrReplace(gltfShape5)
const transform129 = new Transform({
  position: new Vector3(0, 20, 10),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainBlack85.addComponentOrReplace(transform129)

const wallPlainBlack86 = new Entity('wallPlainBlack86')
engine.addEntity(wallPlainBlack86)
wallPlainBlack86.setParent(_scene)
wallPlainBlack86.addComponentOrReplace(gltfShape5)
const transform130 = new Transform({
  position: new Vector3(0, 16, 16),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
wallPlainBlack86.addComponentOrReplace(transform130)

const wallPlainBlack87 = new Entity('wallPlainBlack87')
engine.addEntity(wallPlainBlack87)
wallPlainBlack87.setParent(_scene)
wallPlainBlack87.addComponentOrReplace(gltfShape5)
const transform131 = new Transform({
  position: new Vector3(0, 16, 14),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainBlack87.addComponentOrReplace(transform131)

const wallPlainBlack88 = new Entity('wallPlainBlack88')
engine.addEntity(wallPlainBlack88)
wallPlainBlack88.setParent(_scene)
wallPlainBlack88.addComponentOrReplace(gltfShape5)
const transform132 = new Transform({
  position: new Vector3(0, 16, 12),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
wallPlainBlack88.addComponentOrReplace(transform132)

const wallPlainBlack89 = new Entity('wallPlainBlack89')
engine.addEntity(wallPlainBlack89)
wallPlainBlack89.setParent(_scene)
wallPlainBlack89.addComponentOrReplace(gltfShape5)
const transform133 = new Transform({
  position: new Vector3(0, 16, 10),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainBlack89.addComponentOrReplace(transform133)

const wallPlainBlack90 = new Entity('wallPlainBlack90')
engine.addEntity(wallPlainBlack90)
wallPlainBlack90.setParent(_scene)
wallPlainBlack90.addComponentOrReplace(gltfShape5)
const transform134 = new Transform({
  position: new Vector3(0, 20, 6),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
wallPlainBlack90.addComponentOrReplace(transform134)

const wallPlainBlack91 = new Entity('wallPlainBlack91')
engine.addEntity(wallPlainBlack91)
wallPlainBlack91.setParent(_scene)
wallPlainBlack91.addComponentOrReplace(gltfShape5)
const transform135 = new Transform({
  position: new Vector3(0, 20, 8),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainBlack91.addComponentOrReplace(transform135)

const wallPlainBlack92 = new Entity('wallPlainBlack92')
engine.addEntity(wallPlainBlack92)
wallPlainBlack92.setParent(_scene)
wallPlainBlack92.addComponentOrReplace(gltfShape5)
const transform136 = new Transform({
  position: new Vector3(0, 20, 4),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
wallPlainBlack92.addComponentOrReplace(transform136)

const wallPlainBlack93 = new Entity('wallPlainBlack93')
engine.addEntity(wallPlainBlack93)
wallPlainBlack93.setParent(_scene)
wallPlainBlack93.addComponentOrReplace(gltfShape5)
const transform137 = new Transform({
  position: new Vector3(0, 20, 2),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
wallPlainBlack93.addComponentOrReplace(transform137)

const wallPlainBlack94 = new Entity('wallPlainBlack94')
engine.addEntity(wallPlainBlack94)
wallPlainBlack94.setParent(_scene)
wallPlainBlack94.addComponentOrReplace(gltfShape5)
const transform138 = new Transform({
  position: new Vector3(0, 16, 8),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
wallPlainBlack94.addComponentOrReplace(transform138)

const wallPlainBlack95 = new Entity('wallPlainBlack95')
engine.addEntity(wallPlainBlack95)
wallPlainBlack95.setParent(_scene)
wallPlainBlack95.addComponentOrReplace(gltfShape5)
const transform139 = new Transform({
  position: new Vector3(0, 16, 6),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
wallPlainBlack95.addComponentOrReplace(transform139)

const wallPlainBlack96 = new Entity('wallPlainBlack96')
engine.addEntity(wallPlainBlack96)
wallPlainBlack96.setParent(_scene)
wallPlainBlack96.addComponentOrReplace(gltfShape5)
const transform140 = new Transform({
  position: new Vector3(0, 16, 4),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
wallPlainBlack96.addComponentOrReplace(transform140)

const wallPlainBlack97 = new Entity('wallPlainBlack97')
engine.addEntity(wallPlainBlack97)
wallPlainBlack97.setParent(_scene)
wallPlainBlack97.addComponentOrReplace(gltfShape5)
const transform141 = new Transform({
  position: new Vector3(0, 16, 2),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
wallPlainBlack97.addComponentOrReplace(transform141)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform142 = new Transform({
  position: new Vector3(0.5, 15.47125244140625, 15.5),
  rotation: new Quaternion(-1.8951494833076982e-14, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(28.213815689086914, 6.328243732452393, 1.0000059604644775)
})
imageFromURL.addComponentOrReplace(transform142)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform143 = new Transform({
  position: new Vector3(7.977878570556641, 3.3200273513793945, 0.29173025488853455),
  rotation: new Quaternion(9.53558944722906e-15, 0, 1.3898425765574308e-14, -1),
  scale: new Vector3(11.607497215270996, 17.660505294799805, 1.0000061988830566)
})
imageFromURL2.addComponentOrReplace(transform143)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script1.spawn(galleryInfoBlack, {"text":"*The Cryptonauts*\n*Wall of Fame*\nTop 10 Rarest 'Nauts!\n**********\nFor our Full Collection...\nCheck us out on Opensea!\nOnly 169 'Nauts available!\n**********\nContact us:\nTheCryptonauts@yahoo.com","fontSize":5,"font":"SF","color":"#FF0000"}, createChannel(channelId, galleryInfoBlack, channelBus))
script2.spawn(galleryInfoTurquoise, {"text":"Buying a Cryptonaut...\nDo you need ETH?\n\nBuying something else...\nDo you need MANA?\n**********\nRight in front of you is a\nDEX that swaps tokens!\n\nTry it out!","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoTurquoise, channelBus))
script3.spawn(nftPictureFrame, {"id":"3591160245065073281550756981133883697253055043835827444440560706862117289985","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Metal_Slim","color":"#FFFFFF","ui":true,"uiText":"#1 Most Rare Cryptonaut"}, createChannel(channelId, nftPictureFrame, channelBus))
script3.spawn(nftPictureFrame2, {"id":"53940826113371738863664428048916424119137335839942175146067211050937959317505","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Metal_Slim","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script3.spawn(nftPictureFrame3, {"id":"3591160245065073281550756981133883697253055043835827444440560684871884734465","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Metal_Slim","color":"#FFFFFF","ui":true,"uiText":"#3 Most Rare Cryptonaut\nOwned by: Still Available!"}, createChannel(channelId, nftPictureFrame3, channelBus))
script3.spawn(nftPictureFrame4, {"id":"3591160245065073281550756981133883697253055043835827444440560601309001023489","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Metal_Slim","color":"#FFFFFF","ui":true,"uiText":"#4 Most Rare Cryptonaut\nOwned by: MaskedMan"}, createChannel(channelId, nftPictureFrame4, channelBus))
script3.spawn(nftPictureFrame5, {"id":"3591160245065073281550756981133883697253055043835827444440560737648442867713","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Metal_Slim","color":"#FFFFFF","ui":true,"uiText":"#5 Most Rare Cryptonaut\nOwned by: Still Available!"}, createChannel(channelId, nftPictureFrame5, channelBus))
script3.spawn(nftPictureFrame6, {"id":"3591160245065073281550756981133883697253055043835827444440560721155768451073","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Metal_Slim","color":"#FFFFFF","ui":true,"uiText":"#6 Most Rare Cryptonaut\nOwned by: Centi"}, createChannel(channelId, nftPictureFrame6, channelBus))
script3.spawn(nftPictureFrame7, {"id":"3591160245065073281550756981133883697253055043835827444440560738747954495489","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Metal_Slim","color":"#FFFFFF","ui":true,"uiText":"#7 Most Rare Cryptonaut\nOwned by: Still Available!"}, createChannel(channelId, nftPictureFrame7, channelBus))
script3.spawn(nftPictureFrame8, {"id":"53940826113371738863664428048916424119137335839942175146067211056435517456385","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Metal_Slim","color":"#FFFFFF","ui":true,"uiText":""}, createChannel(channelId, nftPictureFrame8, channelBus))
script3.spawn(nftPictureFrame9, {"id":"3591160245065073281550756981133883697253055043835827444440560570522675445761","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Metal_Slim","color":"#FFFFFF","ui":true,"uiText":"#9 Most Rare Cryptonaut\nOwned by: MaskedMan"}, createChannel(channelId, nftPictureFrame9, channelBus))
script3.spawn(nftPictureFrame10, {"id":"3591160245065073281550756981133883697253055043835827444440560613403628929025","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Metal_Slim","color":"#FFFFFF","ui":true,"uiText":"#10 Most Rare Cryptonaut\nOwned by: Still Available!"}, createChannel(channelId, nftPictureFrame10, channelBus))
script4.spawn(twitterButtonLink, {"url":"@CryptonautsThe","bnw":false,"name":"Follow us on Twitter!"}, createChannel(channelId, twitterButtonLink, channelBus))
script5.spawn(discordButtonLink, {"url":"channels/818952928634601512/818952928634601515","bnw":false,"name":"Join our Discord!"}, createChannel(channelId, discordButtonLink, channelBus))
script6.spawn(externalLink, {"url":"https://opensea.io/collection/the-cryptonauts-launchpad-collection","name":"Collect Cryptonauts on Opensea!"}, createChannel(channelId, externalLink, channelBus))
script7.spawn(imageFromURL, {"image":"https://i.imgur.com/0EyModE.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script7.spawn(imageFromURL2, {"image":"https://i.imgur.com/hyzyabK.jpg"}, createChannel(channelId, imageFromURL2, channelBus))