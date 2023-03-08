Coffee.Main = () => {
    scene.addActorToRoot(new Entity(new Transform2D(Vector2.create(0,0),0,Vector2.create(64,64)),"Testee",[
        new BasicSprite2DRenderer("assets/FancyDude.png"),
        new DVDescBounce(Vector2.create(1,1))]))

    scene.addActorToRoot(new Entity(new Transform2D(Vector2.create(64,32),0,Vector2.create(32,32)),"Guy2",[new BasicSprite2DRenderer("assets/Dude.png")]))
}