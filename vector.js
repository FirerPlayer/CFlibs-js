/**
 * # vector.js - Uma classe JavaScript que representa um vetor, possui métodos para operações básicas entre vetores
 */

/**
 * Construtor da classe Vector, usado com a palavra 'new'.
 * vector.js ainda em desenvolvimento.
 *
 * ### Examples:
 *     var vec1 = new Vector(100, 50);
 *     var vec2 = new Vector(42, 1337);
 *
 * @param {Number} x O valor da coordenada x do vetor
 * @param {Number} y O valor da coordenada y do vetor
 * @return {Vector}
 * @api public
 */
class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.length = Math.sqrt(this.x * this.x + this.y * this.y);
        this.direction = Math.atan2(this.y, this.x);
    }
    /**
     * Funcão que retorna uma cópia do próprio vetor
     * @returns Uma cópia do próprio vetor
     */
    clone(){
        return new Vector(this.x, this.y);
    }
    /**
     * Soma esse vetor com outro.
     * @param {Vector} vector Vetor que será adicionado.
     * @returns o próprio vetor
     */
    add(vector){
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    /**
     * Subtrai esse vetor com outro.
     * @param {Vector} vector Vetor que será subtraido.
     * @returns o próprio vetor
     */
    subtract(vector){
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }
    /**
     * Multiplica esse vetor com outro.
     * @param {Vector} vector Vetor que será multiplicado.
     * @returns o próprio vetor
     */
    dot(vector){
        this.x *= vector.x;
	    this.y *= vector.y;
	    return this;
    }
    /**
     * Soma esse vetor por um escalar.
     * @param {Number} escalar Escalar
     * @returns o próprio vetor
     */
    dotScalar(escalar){
        this.x *= escalar;
        this.y *= escalar;
        return this;
    }
    /**
     * Inverte o sentido do vetor. Possui o mesmo resultado de .dotScalar(-1)
     * @returns o próprio vetor
     */
    invert(){
        this.x *= -1;
        this.y *= -1;
        return this;
    }
    /**
     * Inverte o sentido x do vetor
     * @returns o próprio vetor
     */
    invertX(){
        this.x *= -1;
        return this;
    }
    /**
     * Inverte o sentido y do vetor
     * @returns o próprio vetor
     */
    invertY(){
        this.y *= -1;
        return this;
    }
    /**
     * Normaliza o próprio vetor. Assim, seu tamanho será 1.
     * @returns o próprio vetor
     */
    normalized(){
        this.x /= this.length
        this.y /= this.length
        return this
    }
    /**
     * Calcula a distancia do próprio vetor a outro
     * @param {Vector} vector 
     * @returns A distância entre os dois vetores
     */
    distance(vector){
        return Math.sqrt(Math.pow(this.x - vector.x,2) + Math.pow(this.y - vector.y,2))
    }
}