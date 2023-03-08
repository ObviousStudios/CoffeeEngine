//Add the includes
for (let include = 0; include < includes.length; include++) {
    let script = document.createElement("script")
    script.src = includes[include];
    document.body.appendChild(script)
    console.log(includes[include] + " has been loaded!")
}
//Initilize the main canvas
const VideoSettings = ProjectSettings.VideoSettings
const Canvas = document.createElement("canvas")
const renderType = VideoSettings.Renderer
const GL = Canvas.getContext(renderType)
Canvas.className = "GameRender"
const ScreenResizeStyle = VideoSettings.ResolutionSettings.Resize
//Renderer Functions :)
let rendererFunctions = null
//Define main engine function to make the engine even possible. Might be a way to do this with a const
let Coffee = {
    Main(){},
    OnSceneReset(){},
    
}

//Add functions for renderer
if(renderType == "WebGL"){
}
else if(renderType == "2d"){
    GL.imageSmoothingEnabled = false;
    rendererFunctions = {
        FillBackground(HEX){
            GL.beginPath();
            GL.rect(0, 0, Canvas.width, Canvas.height);
            GL.fillStyle = HEX;
            GL.fill();
        },
        DrawPixel(Position,HEX){
            GL.beginPath();
            GL.rect(Position.x, Position.y, 1, 1);
            GL.fillStyle = HEX;
            GL.fill();
        },
        DrawBox(from,to,HEX){
            GL.beginPath();
            GL.rect(from.x, from.y, to.x-from.x, to.y-from.y);
            GL.fillStyle = HEX;
            GL.fill();
        },
        DrawSprite(x,y,sprite){
            GL.drawImage(sprite, x, y)
        },
        DrawSpriteComplex(source,screen,sprite){
            GL.drawImage(sprite, source.x, source.y, source.width, source.height, screen.x, screen.y, screen.width, screen.height)
        }
    }
}
else{
    alert(renderType +" renderer does not exist ATM.")
}

//Add the Canvas
document.body.appendChild(Canvas)

function windowResizing(){
    Canvas.width = window.innerWidth
    Canvas.height = window.innerHeight
}

function windowStretching(){
    if(window.innerWidth < window.innerHeight){
        Canvas.style.width = "100%"
        Canvas.style.height = "auto"
    }
    else{
        Canvas.style.width = "auto"
        Canvas.style.height = "100%"
    }
}

//Window Resizing
Canvas.width = VideoSettings.ResolutionSettings.Resolution[0]
Canvas.height = VideoSettings.ResolutionSettings.Resolution[1]
if (ScreenResizeStyle == "Resize"){
    Canvas.width = window.innerWidth
    Canvas.height = window.innerHeight
    addEventListener("resize", windowResizing);
}
else{
    if (ScreenResizeStyle == "1:1"){
        if(window.innerWidth < window.innerHeight){
            Canvas.style.width = "100%"
            Canvas.style.height = "auto"
        }
        else{
            Canvas.style.width = "auto"
            Canvas.style.height = "100%"
        }
        addEventListener("resize", windowStretching);
    }
    else if(ScreenResizeStyle == "Strech"){
        Canvas.style.width = "100%"
        Canvas.style.height = "100%"
    }
    else{
        alert(ScreenResizeStyle + " type of resizing does not exist!")
    }
}

rendererFunctions.FillBackground("#00000f")

//setup the scene
let scene = {
    actors:[],
    reset(){
        this.actors = []
        Coffee.OnSceneReset()
    },
    addActorToRoot(child){
        child = (child == undefined) ? new Entity("Empty Object") : child
        scene.actors.push(child)
        return child
    },
    getActorOfName(name){
        for (let child = 0; child < scene.actors.length; child++) {
            const element = scene.actors[child];
            if (element.Name == name){
                return [child, element]
            }
        }
        return [-1, null]
    },
    removeActor(actorID){
        scene.actors.splice(actorID,1)
    }
}

//The Main Game Loop
setInterval(() => {
        scene.actors.forEach(actor => {
            actor.update()
        })
        rendererFunctions.FillBackground("#00000f")
        scene.actors.forEach(actor => {
            actor.draw()
        });
}, 1000 / ProjectSettings.VideoSettings.MaxFPS);

window.addEventListener('load', function () {
    Coffee.Main()
  })