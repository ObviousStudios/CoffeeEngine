const Vector2 = {
    create(x,y){
      let vectorDef = {
            x: x,
            y: y,
      }
      vectorDef.magnitude = () => {return Math.sqrt(Math.pow(vectorDef.x,2)+Math.pow(vectorDef.y,2))}
      vectorDef.coords = () => {return {x:vectorDef.x,y:vectorDef.y} }
      vectorDef.normal = () => {return Vector2.create(vectorDef.x/vectorDef.magnitude(),vectorDef.y/vectorDef.magnitude())}
      vectorDef.add = (SecondVector) => {return Vector2.create(vectorDef.x+SecondVector.x,vectorDef.y+SecondVector.y)}
      vectorDef.sub = (SecondVector) => {return Vector2.create(vectorDef.x-SecondVector.x,vectorDef.y-SecondVector.y)}
      vectorDef.mul = (SecondVector) => {return Vector2.create(vectorDef.x*SecondVector.x,vectorDef.y*SecondVector.y)}
      vectorDef.div = (SecondVector) => {return Vector2.create(vectorDef.x/SecondVector.x,vectorDef.y/SecondVector.y)}
      vectorDef.mod = (SecondVector) => {return Vector2.create(vectorDef.x%SecondVector.x,vectorDef.y%SecondVector.y)}
      vectorDef.pow = (SecondVector) => {return Vector2.create(Math.pow(vectorDef.x,SecondVector.x),Math.pow(vectorDef.y,SecondVector.y))}
      vectorDef.distanceFrom = (SecondVector) => {return Vector2.create(SecondVector.x-vectorDef.x,SecondVector.y-vectorDef.y).magnitude()}
      vectorDef.dot = (SecondVector) => {return (vectorDef.x*SecondVector.x+vectorDef.y*SecondVector.y)}
      vectorDef.cross = (SecondVector) => {return Vector2.create(SecondVector.y-vectorDef.y,SecondVector.x-vectorDef.x)}
      return vectorDef
    },

    add(a,b) {return Vector2.create(a.x+b.x,a.y+b.y)},
    sub(a,b) {return Vector2.create(a.x-b.x,a.y-b.y)},
    mul(a,b) {return Vector2.create(a.x*b.x,a.y*b.y)},
    div(a,b) {return Vector2.create(a.x/b.x,a.y/b.y)},
    mod(a,b) {return Vector2.create(a.x%b.x,a.y%b.y)},
    pow(a,b) {return Vector2.create(Math.pow(a.x,b.x),Math.pow(a.y,b.y))},
    dot(a,b) {return (a.x*b.x+a.y*b.y)},
    cross(a,b) {return Vector2.create(b.y-a.y,b.x-a.x)}
}

const Vector3 = {
    create(x,y,z){
      let vectorDef = {
            x: x,
            y: y,
            z: z,
      }
      vectorDef.magnitude = () => {return Math.sqrt(Math.pow(vectorDef.x,2)+Math.pow(vectorDef.y,2)+Math.pow(vectorDef.z,2))}
      vectorDef.coords = () => {return {x:vectorDef.x,y:vectorDef.y} }
      vectorDef.normal = () => {return Vector3.create(vectorDef.x/vectorDef.magnitude(),vectorDef.y/vectorDef.magnitude())}
      vectorDef.add = (SecondVector) => {return Vector3.create(vectorDef.x+SecondVector.x,vectorDef.y+SecondVector.y,vectorDef.z+SecondVector.z)}
      vectorDef.sub = (SecondVector) => {return Vector3.create(vectorDef.x-SecondVector.x,vectorDef.y-SecondVector.y,vectorDef.z-SecondVector.z)}
      vectorDef.mul = (SecondVector) => {return Vector3.create(vectorDef.x*SecondVector.x,vectorDef.y*SecondVector.yvectorDef.z*SecondVector.z)}
      vectorDef.div = (SecondVector) => {return Vector3.create(vectorDef.x/SecondVector.x,vectorDef.y/SecondVector.y,vectorDef.z/SecondVector.z)}
      vectorDef.mod = (SecondVector) => {return Vector3.create(vectorDef.x%SecondVector.x,vectorDef.y%SecondVector.y,vectorDef.z%SecondVector.z)}
      vectorDef.pow = (SecondVector) => {return Vector3.create(Math.pow(vectorDef.x,SecondVector.x),Math.pow(vectorDef.y,SecondVector.y),Math.pow(vectorDef.z,SecondVector.z))}
      vectorDef.distanceFrom = (SecondVector) => {return Vector3.create(SecondVector.x-vectorDef.x,SecondVector.y-vectorDef.y,SecondVector.z-vectorDef.z).magnitude()}
      vectorDef.dot = (SecondVector) => {return (vectorDef.x*SecondVector.x+vectorDef.y*SecondVector.y+vectorDef.z*SecondVector.z)}
      vectorDef.cross = (SecondVector) => {return Vector3.create(SecondVector.y*vectorDef.z-vectorDef.y*SecondVector.z,vectorDef.z*SecondVector.x-SecondVector.z*vectorDef.x,vectorDef.x*SecondVector.y-SecondVector.x*vectorDef.y)}
      return vectorDef
    },

    add(a,b) {return Vector3.create(a.x+b.x,a.y+b.y,a.z+b.z)},
    sub(a,b) {return Vector3.create(a.x-b.x,a.y-b.y,a.z-b.z)},
    mul(a,b) {return Vector3.create(a.x*b.x,a.y*b.y,a.z*b.z)},
    div(a,b) {return Vector3.create(a.x/b.x,a.y/b.y,a.z/b.z)},
    mod(a,b) {return Vector3.create(a.x%b.x,a.y%b.y,a.z%b.z)},
    pow(a,b) {return Vector3.create(Math.pow(a.x,b.x),Math.pow(a.y,b.y),Math.pow(a.z,b.z))},
    dot(a,b) {return (a.x*b.x+a.y*b.y+a.z*b.z)},
    cross(a,b) {return Vector3.create(b.y*a.z-a.y*b.z,a.z*b.x-b.z*a.x,a.x*b.y-b.x*a.y)}
}

const Vector4 = { //To Do
  create(x,y,z,w){
    let vectorDef = {
          x: x,
          y: y,
          z: z,
          w: w,
    }
    vectorDef.magnitude = () => {return Math.sqrt(Math.pow(vectorDef.x,2)+Math.pow(vectorDef.y,2)+Math.pow(vectorDef.z,2)+Math.pow(vectorDef.w,2))}
    vectorDef.coords = () => {return {x:vectorDef.x,y:vectorDef.y} }
    vectorDef.normal = () => {return Vector4.create(vectorDef.x/vectorDef.magnitude(),vectorDef.y/vectorDef.magnitude())}
    vectorDef.add = (SecondVector) => {return Vector4.create(vectorDef.x+SecondVector.x,vectorDef.y+SecondVector.y,vectorDef.z+SecondVector.z)}
    vectorDef.sub = (SecondVector) => {return Vector4.create(vectorDef.x-SecondVector.x,vectorDef.y-SecondVector.y,vectorDef.z-SecondVector.z)}
    vectorDef.mul = (SecondVector) => {return Vector4.create(vectorDef.x*SecondVector.x,vectorDef.y*SecondVector.yvectorDef.z*SecondVector.z)}
    vectorDef.div = (SecondVector) => {return Vector4.create(vectorDef.x/SecondVector.x,vectorDef.y/SecondVector.y,vectorDef.z/SecondVector.z)}
    vectorDef.mod = (SecondVector) => {return Vector4.create(vectorDef.x%SecondVector.x,vectorDef.y%SecondVector.y,vectorDef.z%SecondVector.z)}
    vectorDef.pow = (SecondVector) => {return Vector4.create(Math.pow(vectorDef.x,SecondVector.x),Math.pow(vectorDef.y,SecondVector.y),Math.pow(vectorDef.z,SecondVector.z))}
    vectorDef.distanceFrom = (SecondVector) => {return Vector4.create(SecondVector.x-vectorDef.x,SecondVector.y-vectorDef.y,SecondVector.z-vectorDef.z).magnitude()}
    vectorDef.dot = (SecondVector) => {return (vectorDef.x*SecondVector.x+vectorDef.y*SecondVector.y+vectorDef.z*SecondVector.z)}
    vectorDef.cross = (SecondVector) => {return Vector4.create(SecondVector.y*vectorDef.z-vectorDef.y*SecondVector.z,vectorDef.z*SecondVector.x-SecondVector.z*vectorDef.x,vectorDef.x*SecondVector.y-SecondVector.x*vectorDef.y)}
    return vectorDef
  },

  add(a,b) {return Vector4.create(a.x+b.x,a.y+b.y,a.z+b.z)},
  sub(a,b) {return Vector4.create(a.x-b.x,a.y-b.y,a.z-b.z)},
  mul(a,b) {return Vector4.create(a.x*b.x,a.y*b.y,a.z*b.z)},
  div(a,b) {return Vector4.create(a.x/b.x,a.y/b.y,a.z/b.z)},
  mod(a,b) {return Vector4.create(a.x%b.x,a.y%b.y,a.z%b.z)},
  pow(a,b) {return Vector4.create(Math.pow(a.x,b.x),Math.pow(a.y,b.y),Math.pow(a.z,b.z))},
  dot(a,b) {return (a.x*b.x+a.y*b.y+a.z*b.z)},
  cross(a,b) {return Vector4.create(b.y*a.z-a.y*b.z,a.z*b.x-b.z*a.x,a.x*b.y-b.x*a.y)}
}

const Matrix2 = {
  create(mat){
    let matrix = {matrix:mat}
    matrix.mulVec = (vector) => {matrix.matrix[0][0] *= vector.x;matrix.matrix[0][1] *= vector.y
                                 matrix.matrix[1][0] *= vector.x;matrix.matrix[1][1] *= vector.y}
    matrix.addVec = (vector) => {matrix.matrix[0][0] += vector.x;matrix.matrix[0][1] += vector.y
                                 matrix.matrix[1][0] += vector.x;matrix.matrix[1][1] += vector.y}
    matrix.divVec = (vector) => {matrix.matrix[0][0] /= vector.x;matrix.matrix[0][1] /= vector.y
                                 matrix.matrix[1][0] /= vector.x;matrix.matrix[1][1] /= vector.y}
    matrix.subVec = (vector) => {matrix.matrix[0][0] -= vector.x;matrix.matrix[0][1] -= vector.y
                                 matrix.matrix[1][0] -= vector.x;matrix.matrix[1][1] -= vector.y}
    matrix.modVec = (vector) => {matrix.matrix[0][0] %= vector.x;matrix.matrix[0][1] %= vector.y
                                 matrix.matrix[1][0] %= vector.x;matrix.matrix[1][1] %= vector.y}
    matrix.powVec = (vector) => {matrix.matrix[0][0] = Math.pow(matrix.matrix[0][0],vector.x);matrix.matrix[0][1] = Math.pow(matrix.matrix[0][1],vector.y)
                                 matrix.matrix[1][0] = Math.pow(matrix.matrix[1][0],vector.x);matrix.matrix[1][1] = Math.pow(matrix.matrix[1][1],vector.y)}
  }
}

const Matrix3 = {
  create(mat){
    let matrix = {matrix:mat}
    matrix.mulVec = (vector) => {matrix.matrix[0][0] *= vector.x;matrix.matrix[0][1] *= vector.y;matrix.matrix[0][2] *= vector.z
                                 matrix.matrix[1][0] *= vector.x;matrix.matrix[1][1] *= vector.y;matrix.matrix[1][2] *= vector.z
                                 matrix.matrix[2][0] *= vector.x;matrix.matrix[2][1] *= vector.y;matrix.matrix[2][2] *= vector.z}
    matrix.addVec = (vector) => {matrix.matrix[0][0] += vector.x;matrix.matrix[0][1] += vector.y;matrix.matrix[0][2] += vector.z
                                 matrix.matrix[1][0] += vector.x;matrix.matrix[1][1] += vector.y;matrix.matrix[1][2] += vector.z
                                 matrix.matrix[2][0] += vector.x;matrix.matrix[2][1] += vector.y;matrix.matrix[2][2] += vector.z}
    matrix.divVec = (vector) => {matrix.matrix[0][0] /= vector.x;matrix.matrix[0][1] /= vector.y;matrix.matrix[0][2] /= vector.z
                                 matrix.matrix[1][0] /= vector.x;matrix.matrix[1][1] /= vector.y;matrix.matrix[1][2] /= vector.z
                                 matrix.matrix[2][0] /= vector.x;matrix.matrix[2][1] /= vector.y;matrix.matrix[2][2] /= vector.z}
    matrix.subVec = (vector) => {matrix.matrix[0][0] -= vector.x;matrix.matrix[0][1] -= vector.y;matrix.matrix[0][2] -= vector.z
                                 matrix.matrix[1][0] -= vector.x;matrix.matrix[1][1] -= vector.y;matrix.matrix[1][2] -= vector.z
                                 matrix.matrix[2][0] -= vector.x;matrix.matrix[2][1] -= vector.y;matrix.matrix[2][2] -= vector.z}
    matrix.modVec = (vector) => {matrix.matrix[0][0] %= vector.x;matrix.matrix[0][1] %= vector.y;matrix.matrix[0][2] %= vector.z
                                 matrix.matrix[1][0] %= vector.x;matrix.matrix[1][1] %= vector.y;matrix.matrix[1][2] %= vector.z
                                 matrix.matrix[2][0] %= vector.x;matrix.matrix[2][1] %= vector.y;matrix.matrix[2][2] %= vector.z}
    matrix.powVec = (vector) => {matrix.matrix[0][0] = Math.pow(matrix.matrix[0][0],vector.x);matrix.matrix[0][1] = Math.pow(matrix.matrix[0][1],vector.y);matrix.matrix[0][2] = Math.pow(matrix.matrix[0][2],vector.z)
                                 matrix.matrix[1][0] = Math.pow(matrix.matrix[1][0],vector.x);matrix.matrix[1][1] = Math.pow(matrix.matrix[1][1],vector.y);matrix.matrix[1][2] = Math.pow(matrix.matrix[0][2],vector.z)
                                 matrix.matrix[2][0] = Math.pow(matrix.matrix[2][0],vector.x);matrix.matrix[2][1] = Math.pow(matrix.matrix[2][1],vector.y);matrix.matrix[2][2] = Math.pow(matrix.matrix[2][2],vector.z)}
  }
}

const rect2 = {
  create(x,y,width,height){
    return {
      x:x,
      y:y,
      width:width,
      height:height
    }
  }
}