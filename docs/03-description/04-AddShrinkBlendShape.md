# Add Shrink BlendShape

## 機能
- 貫通対策用のBlendShapeを非破壊で追加する機能。
- Triangle Selectorでアイランド単位の選択を行った箇所に対してはメッシュの表示/非表示を行うアニメーションに転用できます。
- Blenderで追加するほど綺麗なShrinkにはなりません。

## 実行場所
- Skinned Mesh RendererがついたオブジェクトにAdd ComponentからSceneMeshUtils / SMU Add Shrink BlendShape

## 使い方
- Add/Edit Triangle SelectionからTriangle Selectorを起動
- 消したい箇所のメッシュを指定した上でApply。詳細は[Triangle Selector](../TriangleSelector)から
- Auto Previewが有効であればBlendShapeが追加されたメッシュがプレビューされます。
- NDMF準拠でビルド時にBlendShapeを追加