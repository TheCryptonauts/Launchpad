import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script2 from "../8bd080c9-9954-43b2-a6ac-0b0913d298c0/src/item"
import Script3 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script4 from "../c1e126e7-374e-4fe3-aaae-b4211c321cf3/src/item"
import Script5 from "../01f6d689-02bc-4261-9807-582f96a4ec73/src/item"
import Script6 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const wallPlainBlack = new Entity('wallPlainBlack')
engine.addEntity(wallPlainBlack)
wallPlainBlack.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(32, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("models/PlainBlackWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallPlainBlack.addComponentOrReplace(gltfShape2)

const wallPlainBlack2 = new Entity('wallPlainBlack2')
engine.addEntity(wallPlainBlack2)
wallPlainBlack2.setParent(_scene)
wallPlainBlack2.addComponentOrReplace(gltfShape2)
const transform5 = new Transform({
  position: new Vector3(30, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack2.addComponentOrReplace(transform5)

const wallPlainBlack3 = new Entity('wallPlainBlack3')
engine.addEntity(wallPlainBlack3)
wallPlainBlack3.setParent(_scene)
wallPlainBlack3.addComponentOrReplace(gltfShape2)
const transform6 = new Transform({
  position: new Vector3(28, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack3.addComponentOrReplace(transform6)

const wallPlainBlack4 = new Entity('wallPlainBlack4')
engine.addEntity(wallPlainBlack4)
wallPlainBlack4.setParent(_scene)
wallPlainBlack4.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(26, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack4.addComponentOrReplace(transform7)

const wallPlainBlack5 = new Entity('wallPlainBlack5')
engine.addEntity(wallPlainBlack5)
wallPlainBlack5.setParent(_scene)
wallPlainBlack5.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(24, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack5.addComponentOrReplace(transform8)

const wallPlainBlack6 = new Entity('wallPlainBlack6')
engine.addEntity(wallPlainBlack6)
wallPlainBlack6.setParent(_scene)
wallPlainBlack6.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(22, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack6.addComponentOrReplace(transform9)

const wallPlainBlack7 = new Entity('wallPlainBlack7')
engine.addEntity(wallPlainBlack7)
wallPlainBlack7.setParent(_scene)
wallPlainBlack7.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(20, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack7.addComponentOrReplace(transform10)

const wallPlainBlack8 = new Entity('wallPlainBlack8')
engine.addEntity(wallPlainBlack8)
wallPlainBlack8.setParent(_scene)
wallPlainBlack8.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(18, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack8.addComponentOrReplace(transform11)

const wallPlainBlack9 = new Entity('wallPlainBlack9')
engine.addEntity(wallPlainBlack9)
wallPlainBlack9.setParent(_scene)
wallPlainBlack9.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(16, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack9.addComponentOrReplace(transform12)

const wallPlainBlack10 = new Entity('wallPlainBlack10')
engine.addEntity(wallPlainBlack10)
wallPlainBlack10.setParent(_scene)
wallPlainBlack10.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(14, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack10.addComponentOrReplace(transform13)

const wallPlainBlack11 = new Entity('wallPlainBlack11')
engine.addEntity(wallPlainBlack11)
wallPlainBlack11.setParent(_scene)
wallPlainBlack11.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(12, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack11.addComponentOrReplace(transform14)

const wallPlainBlack12 = new Entity('wallPlainBlack12')
engine.addEntity(wallPlainBlack12)
wallPlainBlack12.setParent(_scene)
wallPlainBlack12.addComponentOrReplace(gltfShape2)
const transform15 = new Transform({
  position: new Vector3(10, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack12.addComponentOrReplace(transform15)

const wallPlainBlack13 = new Entity('wallPlainBlack13')
engine.addEntity(wallPlainBlack13)
wallPlainBlack13.setParent(_scene)
wallPlainBlack13.addComponentOrReplace(gltfShape2)
const transform16 = new Transform({
  position: new Vector3(8, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack13.addComponentOrReplace(transform16)

const wallPlainBlack14 = new Entity('wallPlainBlack14')
engine.addEntity(wallPlainBlack14)
wallPlainBlack14.setParent(_scene)
wallPlainBlack14.addComponentOrReplace(gltfShape2)
const transform17 = new Transform({
  position: new Vector3(6, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack14.addComponentOrReplace(transform17)

const wallPlainBlack15 = new Entity('wallPlainBlack15')
engine.addEntity(wallPlainBlack15)
wallPlainBlack15.setParent(_scene)
wallPlainBlack15.addComponentOrReplace(gltfShape2)
const transform18 = new Transform({
  position: new Vector3(4, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack15.addComponentOrReplace(transform18)

const wallPlainBlack17 = new Entity('wallPlainBlack17')
engine.addEntity(wallPlainBlack17)
wallPlainBlack17.setParent(_scene)
wallPlainBlack17.addComponentOrReplace(gltfShape2)
const transform19 = new Transform({
  position: new Vector3(2, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack17.addComponentOrReplace(transform19)

const wallPlainBlack18 = new Entity('wallPlainBlack18')
engine.addEntity(wallPlainBlack18)
wallPlainBlack18.setParent(_scene)
wallPlainBlack18.addComponentOrReplace(gltfShape2)
const transform20 = new Transform({
  position: new Vector3(32, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack18.addComponentOrReplace(transform20)

const wallPlainBlack19 = new Entity('wallPlainBlack19')
engine.addEntity(wallPlainBlack19)
wallPlainBlack19.setParent(_scene)
wallPlainBlack19.addComponentOrReplace(gltfShape2)
const transform21 = new Transform({
  position: new Vector3(30, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack19.addComponentOrReplace(transform21)

const wallPlainBlack20 = new Entity('wallPlainBlack20')
engine.addEntity(wallPlainBlack20)
wallPlainBlack20.setParent(_scene)
wallPlainBlack20.addComponentOrReplace(gltfShape2)
const transform22 = new Transform({
  position: new Vector3(28, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack20.addComponentOrReplace(transform22)

const wallPlainBlack21 = new Entity('wallPlainBlack21')
engine.addEntity(wallPlainBlack21)
wallPlainBlack21.setParent(_scene)
wallPlainBlack21.addComponentOrReplace(gltfShape2)
const transform23 = new Transform({
  position: new Vector3(26, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack21.addComponentOrReplace(transform23)

const wallPlainBlack22 = new Entity('wallPlainBlack22')
engine.addEntity(wallPlainBlack22)
wallPlainBlack22.setParent(_scene)
wallPlainBlack22.addComponentOrReplace(gltfShape2)
const transform24 = new Transform({
  position: new Vector3(24, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack22.addComponentOrReplace(transform24)

const wallPlainBlack23 = new Entity('wallPlainBlack23')
engine.addEntity(wallPlainBlack23)
wallPlainBlack23.setParent(_scene)
wallPlainBlack23.addComponentOrReplace(gltfShape2)
const transform25 = new Transform({
  position: new Vector3(22, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack23.addComponentOrReplace(transform25)

const wallPlainBlack24 = new Entity('wallPlainBlack24')
engine.addEntity(wallPlainBlack24)
wallPlainBlack24.setParent(_scene)
wallPlainBlack24.addComponentOrReplace(gltfShape2)
const transform26 = new Transform({
  position: new Vector3(20, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack24.addComponentOrReplace(transform26)

const wallPlainBlack25 = new Entity('wallPlainBlack25')
engine.addEntity(wallPlainBlack25)
wallPlainBlack25.setParent(_scene)
wallPlainBlack25.addComponentOrReplace(gltfShape2)
const transform27 = new Transform({
  position: new Vector3(16, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack25.addComponentOrReplace(transform27)

const wallPlainBlack26 = new Entity('wallPlainBlack26')
engine.addEntity(wallPlainBlack26)
wallPlainBlack26.setParent(_scene)
wallPlainBlack26.addComponentOrReplace(gltfShape2)
const transform28 = new Transform({
  position: new Vector3(18, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack26.addComponentOrReplace(transform28)

const wallPlainBlack27 = new Entity('wallPlainBlack27')
engine.addEntity(wallPlainBlack27)
wallPlainBlack27.setParent(_scene)
wallPlainBlack27.addComponentOrReplace(gltfShape2)
const transform29 = new Transform({
  position: new Vector3(14, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack27.addComponentOrReplace(transform29)

const wallPlainBlack28 = new Entity('wallPlainBlack28')
engine.addEntity(wallPlainBlack28)
wallPlainBlack28.setParent(_scene)
wallPlainBlack28.addComponentOrReplace(gltfShape2)
const transform30 = new Transform({
  position: new Vector3(12, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack28.addComponentOrReplace(transform30)

const wallPlainBlack29 = new Entity('wallPlainBlack29')
engine.addEntity(wallPlainBlack29)
wallPlainBlack29.setParent(_scene)
wallPlainBlack29.addComponentOrReplace(gltfShape2)
const transform31 = new Transform({
  position: new Vector3(10, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack29.addComponentOrReplace(transform31)

const wallPlainBlack30 = new Entity('wallPlainBlack30')
engine.addEntity(wallPlainBlack30)
wallPlainBlack30.setParent(_scene)
wallPlainBlack30.addComponentOrReplace(gltfShape2)
const transform32 = new Transform({
  position: new Vector3(6, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack30.addComponentOrReplace(transform32)

const wallPlainBlack31 = new Entity('wallPlainBlack31')
engine.addEntity(wallPlainBlack31)
wallPlainBlack31.setParent(_scene)
wallPlainBlack31.addComponentOrReplace(gltfShape2)
const transform33 = new Transform({
  position: new Vector3(8, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack31.addComponentOrReplace(transform33)

const wallPlainBlack32 = new Entity('wallPlainBlack32')
engine.addEntity(wallPlainBlack32)
wallPlainBlack32.setParent(_scene)
wallPlainBlack32.addComponentOrReplace(gltfShape2)
const transform34 = new Transform({
  position: new Vector3(4, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack32.addComponentOrReplace(transform34)

const wallPlainBlack33 = new Entity('wallPlainBlack33')
engine.addEntity(wallPlainBlack33)
wallPlainBlack33.setParent(_scene)
wallPlainBlack33.addComponentOrReplace(gltfShape2)
const transform35 = new Transform({
  position: new Vector3(30, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack33.addComponentOrReplace(transform35)

const wallPlainBlack34 = new Entity('wallPlainBlack34')
engine.addEntity(wallPlainBlack34)
wallPlainBlack34.setParent(_scene)
wallPlainBlack34.addComponentOrReplace(gltfShape2)
const transform36 = new Transform({
  position: new Vector3(32, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack34.addComponentOrReplace(transform36)

const wallPlainBlack35 = new Entity('wallPlainBlack35')
engine.addEntity(wallPlainBlack35)
wallPlainBlack35.setParent(_scene)
wallPlainBlack35.addComponentOrReplace(gltfShape2)
const transform37 = new Transform({
  position: new Vector3(28, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack35.addComponentOrReplace(transform37)

const wallPlainBlack36 = new Entity('wallPlainBlack36')
engine.addEntity(wallPlainBlack36)
wallPlainBlack36.setParent(_scene)
wallPlainBlack36.addComponentOrReplace(gltfShape2)
const transform38 = new Transform({
  position: new Vector3(26, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack36.addComponentOrReplace(transform38)

const wallPlainBlack37 = new Entity('wallPlainBlack37')
engine.addEntity(wallPlainBlack37)
wallPlainBlack37.setParent(_scene)
wallPlainBlack37.addComponentOrReplace(gltfShape2)
const transform39 = new Transform({
  position: new Vector3(24, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack37.addComponentOrReplace(transform39)

const wallPlainBlack38 = new Entity('wallPlainBlack38')
engine.addEntity(wallPlainBlack38)
wallPlainBlack38.setParent(_scene)
wallPlainBlack38.addComponentOrReplace(gltfShape2)
const transform40 = new Transform({
  position: new Vector3(22, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack38.addComponentOrReplace(transform40)

const wallPlainBlack39 = new Entity('wallPlainBlack39')
engine.addEntity(wallPlainBlack39)
wallPlainBlack39.setParent(_scene)
wallPlainBlack39.addComponentOrReplace(gltfShape2)
const transform41 = new Transform({
  position: new Vector3(20, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack39.addComponentOrReplace(transform41)

const wallPlainBlack40 = new Entity('wallPlainBlack40')
engine.addEntity(wallPlainBlack40)
wallPlainBlack40.setParent(_scene)
wallPlainBlack40.addComponentOrReplace(gltfShape2)
const transform42 = new Transform({
  position: new Vector3(18, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack40.addComponentOrReplace(transform42)

const wallPlainBlack41 = new Entity('wallPlainBlack41')
engine.addEntity(wallPlainBlack41)
wallPlainBlack41.setParent(_scene)
wallPlainBlack41.addComponentOrReplace(gltfShape2)
const transform43 = new Transform({
  position: new Vector3(16, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack41.addComponentOrReplace(transform43)

const wallPlainBlack42 = new Entity('wallPlainBlack42')
engine.addEntity(wallPlainBlack42)
wallPlainBlack42.setParent(_scene)
wallPlainBlack42.addComponentOrReplace(gltfShape2)
const transform44 = new Transform({
  position: new Vector3(14, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack42.addComponentOrReplace(transform44)

const wallPlainBlack43 = new Entity('wallPlainBlack43')
engine.addEntity(wallPlainBlack43)
wallPlainBlack43.setParent(_scene)
wallPlainBlack43.addComponentOrReplace(gltfShape2)
const transform45 = new Transform({
  position: new Vector3(12, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack43.addComponentOrReplace(transform45)

const wallPlainBlack44 = new Entity('wallPlainBlack44')
engine.addEntity(wallPlainBlack44)
wallPlainBlack44.setParent(_scene)
wallPlainBlack44.addComponentOrReplace(gltfShape2)
const transform46 = new Transform({
  position: new Vector3(10, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack44.addComponentOrReplace(transform46)

const wallPlainBlack45 = new Entity('wallPlainBlack45')
engine.addEntity(wallPlainBlack45)
wallPlainBlack45.setParent(_scene)
wallPlainBlack45.addComponentOrReplace(gltfShape2)
const transform47 = new Transform({
  position: new Vector3(8, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack45.addComponentOrReplace(transform47)

const wallPlainBlack46 = new Entity('wallPlainBlack46')
engine.addEntity(wallPlainBlack46)
wallPlainBlack46.setParent(_scene)
wallPlainBlack46.addComponentOrReplace(gltfShape2)
const transform48 = new Transform({
  position: new Vector3(6, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack46.addComponentOrReplace(transform48)

const wallPlainBlack47 = new Entity('wallPlainBlack47')
engine.addEntity(wallPlainBlack47)
wallPlainBlack47.setParent(_scene)
wallPlainBlack47.addComponentOrReplace(gltfShape2)
const transform49 = new Transform({
  position: new Vector3(4, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack47.addComponentOrReplace(transform49)

const wallPlainBlack48 = new Entity('wallPlainBlack48')
engine.addEntity(wallPlainBlack48)
wallPlainBlack48.setParent(_scene)
wallPlainBlack48.addComponentOrReplace(gltfShape2)
const transform50 = new Transform({
  position: new Vector3(2, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack48.addComponentOrReplace(transform50)

const windowFullWall2 = new Entity('windowFullWall2')
engine.addEntity(windowFullWall2)
windowFullWall2.setParent(_scene)
const gltfShape3 = new GLTFShape("models/FullWallWindow.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
windowFullWall2.addComponentOrReplace(gltfShape3)
const transform51 = new Transform({
  position: new Vector3(4, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall2.addComponentOrReplace(transform51)

const windowFullWall3 = new Entity('windowFullWall3')
engine.addEntity(windowFullWall3)
windowFullWall3.setParent(_scene)
windowFullWall3.addComponentOrReplace(gltfShape3)
const transform52 = new Transform({
  position: new Vector3(6, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall3.addComponentOrReplace(transform52)

const windowFullWall4 = new Entity('windowFullWall4')
engine.addEntity(windowFullWall4)
windowFullWall4.setParent(_scene)
windowFullWall4.addComponentOrReplace(gltfShape3)
const transform53 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall4.addComponentOrReplace(transform53)

const windowFullWall5 = new Entity('windowFullWall5')
engine.addEntity(windowFullWall5)
windowFullWall5.setParent(_scene)
windowFullWall5.addComponentOrReplace(gltfShape3)
const transform54 = new Transform({
  position: new Vector3(10, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall5.addComponentOrReplace(transform54)

const windowFullWall6 = new Entity('windowFullWall6')
engine.addEntity(windowFullWall6)
windowFullWall6.setParent(_scene)
windowFullWall6.addComponentOrReplace(gltfShape3)
const transform55 = new Transform({
  position: new Vector3(12, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall6.addComponentOrReplace(transform55)

const windowFullWall7 = new Entity('windowFullWall7')
engine.addEntity(windowFullWall7)
windowFullWall7.setParent(_scene)
windowFullWall7.addComponentOrReplace(gltfShape3)
const transform56 = new Transform({
  position: new Vector3(14, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall7.addComponentOrReplace(transform56)

const windowFullWall8 = new Entity('windowFullWall8')
engine.addEntity(windowFullWall8)
windowFullWall8.setParent(_scene)
windowFullWall8.addComponentOrReplace(gltfShape3)
const transform57 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall8.addComponentOrReplace(transform57)

const windowFullWall9 = new Entity('windowFullWall9')
engine.addEntity(windowFullWall9)
windowFullWall9.setParent(_scene)
windowFullWall9.addComponentOrReplace(gltfShape3)
const transform58 = new Transform({
  position: new Vector3(18, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall9.addComponentOrReplace(transform58)

const windowFullWall10 = new Entity('windowFullWall10')
engine.addEntity(windowFullWall10)
windowFullWall10.setParent(_scene)
windowFullWall10.addComponentOrReplace(gltfShape3)
const transform59 = new Transform({
  position: new Vector3(20, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall10.addComponentOrReplace(transform59)

const windowFullWall11 = new Entity('windowFullWall11')
engine.addEntity(windowFullWall11)
windowFullWall11.setParent(_scene)
windowFullWall11.addComponentOrReplace(gltfShape3)
const transform60 = new Transform({
  position: new Vector3(22, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall11.addComponentOrReplace(transform60)

const windowFullWall12 = new Entity('windowFullWall12')
engine.addEntity(windowFullWall12)
windowFullWall12.setParent(_scene)
windowFullWall12.addComponentOrReplace(gltfShape3)
const transform61 = new Transform({
  position: new Vector3(24, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall12.addComponentOrReplace(transform61)

const windowFullWall13 = new Entity('windowFullWall13')
engine.addEntity(windowFullWall13)
windowFullWall13.setParent(_scene)
windowFullWall13.addComponentOrReplace(gltfShape3)
const transform62 = new Transform({
  position: new Vector3(26, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall13.addComponentOrReplace(transform62)

const windowFullWall14 = new Entity('windowFullWall14')
engine.addEntity(windowFullWall14)
windowFullWall14.setParent(_scene)
windowFullWall14.addComponentOrReplace(gltfShape3)
const transform63 = new Transform({
  position: new Vector3(28, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall14.addComponentOrReplace(transform63)

const windowFullWall15 = new Entity('windowFullWall15')
engine.addEntity(windowFullWall15)
windowFullWall15.setParent(_scene)
windowFullWall15.addComponentOrReplace(gltfShape3)
const transform64 = new Transform({
  position: new Vector3(30, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall15.addComponentOrReplace(transform64)

const wallcornerGlass = new Entity('wallcornerGlass')
engine.addEntity(wallcornerGlass)
wallcornerGlass.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(0, 0, 16),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
wallcornerGlass.addComponentOrReplace(transform65)
const gltfShape4 = new GLTFShape("models/GlassCorner.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
wallcornerGlass.addComponentOrReplace(gltfShape4)

const windowFullWall = new Entity('windowFullWall')
engine.addEntity(windowFullWall)
windowFullWall.setParent(_scene)
windowFullWall.addComponentOrReplace(gltfShape3)
const transform66 = new Transform({
  position: new Vector3(32, 0, 0.5),
  rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.647372722625732, 3.9907405376434326, 1.0000042915344238)
})
windowFullWall.addComponentOrReplace(transform66)

const windowFullWall16 = new Entity('windowFullWall16')
engine.addEntity(windowFullWall16)
windowFullWall16.setParent(_scene)
windowFullWall16.addComponentOrReplace(gltfShape3)
const transform67 = new Transform({
  position: new Vector3(0.3044697642326355, 0, 0.5),
  rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(3.250028610229492, 3.994396924972534, 1.0000042915344238)
})
windowFullWall16.addComponentOrReplace(transform67)

const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
twitterButtonLink.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(29.5, 0, 15),
  rotation: new Quaternion(8.940652662658977e-8, -0.9999951124191284, 1.1892947782143892e-7, 0.0031228656880557537),
  scale: new Vector3(4.596221923828125, 10.24222469329834, 1.0000022649765015)
})
twitterButtonLink.addComponentOrReplace(transform68)

const discordButtonLink = new Entity('discordButtonLink')
engine.addEntity(discordButtonLink)
discordButtonLink.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(26, 0, 15),
  rotation: new Quaternion(-4.295296875746505e-15, -0.999988317489624, 1.1920789688701916e-7, 0.004836361855268478),
  scale: new Vector3(4.500013828277588, 10.290130615234375, 1.000002145767212)
})
discordButtonLink.addComponentOrReplace(transform69)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(0.7050018310546875, 0.4235677719116211, 3.927860736846924),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(9.963072776794434, 10.29811954498291, 1.0000033378601074)
})
externalLink.addComponentOrReplace(transform70)

const neonTubeBlue = new Entity('neonTubeBlue')
engine.addEntity(neonTubeBlue)
neonTubeBlue.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(31, 18.400339126586914, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(59.80570983886719, -4.27242374420166, 1.0000016689300537)
})
neonTubeBlue.addComponentOrReplace(transform71)
const gltfShape5 = new GLTFShape("models/Neon_Tube_Blue.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
neonTubeBlue.addComponentOrReplace(gltfShape5)

const galleryInfoBlack = new Entity('galleryInfoBlack')
engine.addEntity(galleryInfoBlack)
galleryInfoBlack.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(1, 0, 15),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(2.9600958824157715, 2.249000072479248, 1)
})
galleryInfoBlack.addComponentOrReplace(transform72)

const galleryInfoTurquoise = new Entity('galleryInfoTurquoise')
engine.addEntity(galleryInfoTurquoise)
galleryInfoTurquoise.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(12, 0, 15),
  rotation: new Quaternion(-1.7280039636062387e-15, -1, 1.1920926823449918e-7, -1.4901161193847656e-8),
  scale: new Vector3(2.5078237056732178, 2.253687858581543, 1)
})
galleryInfoTurquoise.addComponentOrReplace(transform73)

const windowFullWall17 = new Entity('windowFullWall17')
engine.addEntity(windowFullWall17)
windowFullWall17.setParent(_scene)
windowFullWall17.addComponentOrReplace(gltfShape3)
const transform74 = new Transform({
  position: new Vector3(32, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowFullWall17.addComponentOrReplace(transform74)

const wallPlainBlack49 = new Entity('wallPlainBlack49')
engine.addEntity(wallPlainBlack49)
wallPlainBlack49.setParent(_scene)
wallPlainBlack49.addComponentOrReplace(gltfShape2)
const transform75 = new Transform({
  position: new Vector3(2, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack49.addComponentOrReplace(transform75)

const wallPlainBlack50 = new Entity('wallPlainBlack50')
engine.addEntity(wallPlainBlack50)
wallPlainBlack50.setParent(_scene)
wallPlainBlack50.addComponentOrReplace(gltfShape2)
const transform76 = new Transform({
  position: new Vector3(4, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack50.addComponentOrReplace(transform76)

const wallPlainBlack51 = new Entity('wallPlainBlack51')
engine.addEntity(wallPlainBlack51)
wallPlainBlack51.setParent(_scene)
wallPlainBlack51.addComponentOrReplace(gltfShape2)
const transform77 = new Transform({
  position: new Vector3(6, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack51.addComponentOrReplace(transform77)

const wallPlainBlack52 = new Entity('wallPlainBlack52')
engine.addEntity(wallPlainBlack52)
wallPlainBlack52.setParent(_scene)
wallPlainBlack52.addComponentOrReplace(gltfShape2)
const transform78 = new Transform({
  position: new Vector3(8, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack52.addComponentOrReplace(transform78)

const wallPlainBlack53 = new Entity('wallPlainBlack53')
engine.addEntity(wallPlainBlack53)
wallPlainBlack53.setParent(_scene)
wallPlainBlack53.addComponentOrReplace(gltfShape2)
const transform79 = new Transform({
  position: new Vector3(10, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack53.addComponentOrReplace(transform79)

const wallPlainBlack54 = new Entity('wallPlainBlack54')
engine.addEntity(wallPlainBlack54)
wallPlainBlack54.setParent(_scene)
wallPlainBlack54.addComponentOrReplace(gltfShape2)
const transform80 = new Transform({
  position: new Vector3(12, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack54.addComponentOrReplace(transform80)

const wallPlainBlack55 = new Entity('wallPlainBlack55')
engine.addEntity(wallPlainBlack55)
wallPlainBlack55.setParent(_scene)
wallPlainBlack55.addComponentOrReplace(gltfShape2)
const transform81 = new Transform({
  position: new Vector3(14, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack55.addComponentOrReplace(transform81)

const wallPlainBlack56 = new Entity('wallPlainBlack56')
engine.addEntity(wallPlainBlack56)
wallPlainBlack56.setParent(_scene)
wallPlainBlack56.addComponentOrReplace(gltfShape2)
const transform82 = new Transform({
  position: new Vector3(16, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack56.addComponentOrReplace(transform82)

const wallPlainBlack57 = new Entity('wallPlainBlack57')
engine.addEntity(wallPlainBlack57)
wallPlainBlack57.setParent(_scene)
wallPlainBlack57.addComponentOrReplace(gltfShape2)
const transform83 = new Transform({
  position: new Vector3(18, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack57.addComponentOrReplace(transform83)

const wallPlainBlack58 = new Entity('wallPlainBlack58')
engine.addEntity(wallPlainBlack58)
wallPlainBlack58.setParent(_scene)
wallPlainBlack58.addComponentOrReplace(gltfShape2)
const transform84 = new Transform({
  position: new Vector3(20, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack58.addComponentOrReplace(transform84)

const wallPlainBlack59 = new Entity('wallPlainBlack59')
engine.addEntity(wallPlainBlack59)
wallPlainBlack59.setParent(_scene)
wallPlainBlack59.addComponentOrReplace(gltfShape2)
const transform85 = new Transform({
  position: new Vector3(22, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack59.addComponentOrReplace(transform85)

const wallPlainBlack60 = new Entity('wallPlainBlack60')
engine.addEntity(wallPlainBlack60)
wallPlainBlack60.setParent(_scene)
wallPlainBlack60.addComponentOrReplace(gltfShape2)
const transform86 = new Transform({
  position: new Vector3(24, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack60.addComponentOrReplace(transform86)

const wallPlainBlack61 = new Entity('wallPlainBlack61')
engine.addEntity(wallPlainBlack61)
wallPlainBlack61.setParent(_scene)
wallPlainBlack61.addComponentOrReplace(gltfShape2)
const transform87 = new Transform({
  position: new Vector3(26, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack61.addComponentOrReplace(transform87)

const wallPlainBlack62 = new Entity('wallPlainBlack62')
engine.addEntity(wallPlainBlack62)
wallPlainBlack62.setParent(_scene)
wallPlainBlack62.addComponentOrReplace(gltfShape2)
const transform88 = new Transform({
  position: new Vector3(28, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack62.addComponentOrReplace(transform88)

const wallPlainBlack63 = new Entity('wallPlainBlack63')
engine.addEntity(wallPlainBlack63)
wallPlainBlack63.setParent(_scene)
wallPlainBlack63.addComponentOrReplace(gltfShape2)
const transform89 = new Transform({
  position: new Vector3(30, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack63.addComponentOrReplace(transform89)

const wallPlainBlack64 = new Entity('wallPlainBlack64')
engine.addEntity(wallPlainBlack64)
wallPlainBlack64.setParent(_scene)
wallPlainBlack64.addComponentOrReplace(gltfShape2)
const transform90 = new Transform({
  position: new Vector3(32, 11.98443603515625, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack64.addComponentOrReplace(transform90)

const neonTubeBlue2 = new Entity('neonTubeBlue2')
engine.addEntity(neonTubeBlue2)
neonTubeBlue2.setParent(_scene)
neonTubeBlue2.addComponentOrReplace(gltfShape5)
const transform91 = new Transform({
  position: new Vector3(31, 4.1282572746276855, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(59.80570983886719, -4.27242374420166, 1.0000016689300537)
})
neonTubeBlue2.addComponentOrReplace(transform91)

const neonTubeBlue3 = new Entity('neonTubeBlue3')
engine.addEntity(neonTubeBlue3)
neonTubeBlue3.setParent(_scene)
neonTubeBlue3.addComponentOrReplace(gltfShape5)
const transform92 = new Transform({
  position: new Vector3(30.939950942993164, 7.948412895202637, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(59.80570983886719, -4.27242374420166, 1.0000016689300537)
})
neonTubeBlue3.addComponentOrReplace(transform92)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(28.134994506835938, 8.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame.addComponentOrReplace(transform93)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(22.134994506835938, 8.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame2.addComponentOrReplace(transform94)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(16.19862937927246, 8.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame3.addComponentOrReplace(transform95)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(10.134994506835938, 8.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame4.addComponentOrReplace(transform96)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(4.1349945068359375, 8.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame5.addComponentOrReplace(transform97)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(28.134994506835938, 1.7996587753295898, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame6.addComponentOrReplace(transform98)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(22.134994506835938, 1.7996587753295898, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame7.addComponentOrReplace(transform99)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(16.19862937927246, 1.7996587753295898, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame8.addComponentOrReplace(transform100)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(10.134994506835938, 1.7996587753295898, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame9.addComponentOrReplace(transform101)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(4.1349945068359375, 1.7996587753295898, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.329304695129395, 10.96066665649414, 1)
})
nftPictureFrame10.addComponentOrReplace(transform102)

const wallPlainBlack16 = new Entity('wallPlainBlack16')
engine.addEntity(wallPlainBlack16)
wallPlainBlack16.setParent(_scene)
wallPlainBlack16.addComponentOrReplace(gltfShape2)
const transform103 = new Transform({
  position: new Vector3(2, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainBlack16.addComponentOrReplace(transform103)

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
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script1.spawn(twitterButtonLink, {"url":"@CryptonautsThe","bnw":false,"name":"Follow us on Twitter!"}, createChannel(channelId, twitterButtonLink, channelBus))
script2.spawn(discordButtonLink, {"url":"https://discord.gg/uUkHwmYT33","bnw":false,"name":"Join our Discord!"}, createChannel(channelId, discordButtonLink, channelBus))
script3.spawn(externalLink, {"url":"https://opensea.io/collection/the-cryptonauts-launchpad-collection","name":"Collect Cryptonauts on Opensea!"}, createChannel(channelId, externalLink, channelBus))
script4.spawn(galleryInfoBlack, {"text":"*The Cryptonauts*\n*Wall of Fame*\n\nTop 10 Rarest 'Nauts!\n(some are not released yet)\n\nFor our Full Collection...\nCheck us out on Opensea!\nOnly 169 'Nauts available!","fontSize":5,"font":"SF","color":"#FF0000"}, createChannel(channelId, galleryInfoBlack, channelBus))
script5.spawn(galleryInfoTurquoise, {"text":"Buying a Cryptonaut...\nDo you need ETH?\n\nBuying something else...\nDo you need MANA?\n\nLook to your left...\n\nOur DEX can swap tokens!","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoTurquoise, channelBus))
script6.spawn(nftPictureFrame, {"id":"","contract":"","style":"Metal_Slim","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script6.spawn(nftPictureFrame2, {"id":"","contract":"","style":"Metal_Slim","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script6.spawn(nftPictureFrame3, {"id":"","contract":"","style":"Metal_Slim","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script6.spawn(nftPictureFrame4, {"id":"3591160245065073281550756981133883697253055043835827444440560601309001023489","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Metal_Slim","color":"#FFFFFF","ui":true,"uiText":"Owned by: MaskedMan"}, createChannel(channelId, nftPictureFrame4, channelBus))
script6.spawn(nftPictureFrame5, {"id":"","contract":"","style":"Metal_Slim","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script6.spawn(nftPictureFrame6, {"id":"","contract":"","style":"Metal_Slim","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script6.spawn(nftPictureFrame7, {"id":"","contract":"","style":"Metal_Slim","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script6.spawn(nftPictureFrame8, {"id":"","contract":"","style":"Metal_Slim","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script6.spawn(nftPictureFrame9, {"id":"3591160245065073281550756981133883697253055043835827444440560570522675445761","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Metal_Slim","color":"#FFFFFF","ui":true,"uiText":"Owned by: MaskedMan"}, createChannel(channelId, nftPictureFrame9, channelBus))
script6.spawn(nftPictureFrame10, {"id":"","contract":"","style":"Metal_Slim","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))