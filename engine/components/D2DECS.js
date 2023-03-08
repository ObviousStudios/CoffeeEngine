//Base Entities and Components for the ECS
class Entity {
    constructor(Transform,Name,Components){
        Components = (Components == undefined) ? [] : Components
        this.Components = Components
        this.children = []
        this.Parent = null
        this.Name = Name
        this.Transform = Transform
    }
    update(DeltaTime,Parent) {
        this.Components.forEach(component => {
                component.update(DeltaTime,this)
        });
        this.children.forEach(curChild => {
                curChild.update(DeltaTime,this)
        })
    }
    draw() {
        this.Components.forEach(component => {
                component.draw(this.Transform)
        });
        this.children.forEach(curChild => {
                curChild.draw()
        })
    }
    addChild(child) {
        child = (child == undefined) ? new Entity("Empty Object") : child
        child.Parent = this
        this.children.push(child)
        return child
    }
    getChildOfName(Name,Recursive){
        for (let child = 0; child < this.children.length; child++) {
            const element = this.children[child];
            if(element.Name == Name){
                return [child,element]
            }
            if(Recursive)
            {
                curChild.getChildOfName(Name,Recursive)
            }
        }
        return [-1, null]
    }
    removeChild(actorID){
        this.children.splice(actorID,1)
    }
}

class Component {
    constructor(){
        this.init()
    }
    init(){
        console.log("Hello World!")
    }
    update(){}
    draw(){}
}

class Transform2D extends Component{
    constructor(Position,Rotation,Scale)
    {
        //Just going to warn the user if the transform has invalid types when first set!
        super(Position,Rotation,Scale)
        this.Position = Position
        this.Rotation = Rotation
        this.Scale = Scale
    }
}

class BasicSprite2DRenderer extends Component{
    constructor(spritePath){
        super(spritePath)
        this.sprite = new Image()
        this.sprite.src = spritePath
        this.sprite.onload = () => {
            this.viewRect = rect2.create(0,0,this.sprite.width,this.sprite.height)
        }
    }
    draw(transform){
        rendererFunctions.DrawSpriteComplex(this.viewRect,rect2.create(transform.Position.x,transform.Position.y,transform.Scale.x,transform.Scale.y),this.sprite)
    }
}