class DVDescBounce extends Component {
    constructor(Speed){
        super()
        this.XVel = Speed.x
        this.YVel = Speed.y
        this.init()
    }
    update(DeltaTime,Owner){
        Owner.Transform.Position = Owner.Transform.Position.add(Vector2.create(this.XVel,this.YVel))
        if (Owner.Transform.Position.x + Owner.Transform.Scale.x > Canvas.width || Owner.Transform.Position.x < 0){
            this.XVel = -this.XVel
        }
        if (Owner.Transform.Position.y + Owner.Transform.Scale.y > Canvas.height || Owner.Transform.Position.y < 0){
            this.YVel = -this.YVel
        }
    }
}