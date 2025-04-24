// generator.js
console.log("running game sequence generator...\n");

// Probability constants
const TURN_INCREASE = 0.002;
const LAYERS_ABOVE_START = 0.08;
const SUBTRACT_PER_LAYER = 0.003;
const SIDE_INCREASE = 0.008;
const BLOCKS_AROUND = 0.008;
const BLOCK_AROUND_LIST = Array(54).fill(0.0);

let PROB_UNDER_COUNT = 0;

class Block {
    constructor(ID, pos, prob = 0) {
        this.ID = parseInt(ID);
        this.pos = pos;
        this.prob = prob;
    }

    toString() {
        if (this.ID === -1) {
            return "<   >";
        }
        if (this.ID < 10) {
            return `<B0${this.ID}>`;
        }
        return `<B${this.ID}>`;
    }

    printProb() {
        if (this.ID === -1) {
            return "<      >";
        }
        return `<${this.prob.toFixed(4)}>`;
    }

    equals(other) {
        return (this.ID === other.ID);
    }

    getID() {
        return this.ID;
    }

    getPos() {
        return this.pos;
    }

    getProb() {
        return this.prob;
    }

    setID(ID) {
        this.ID = ID;
    }

    setPos(pos) {
        this.pos = pos;
    }

    setProb(prob) {
        this.prob = prob;
    }

    addProb(prob) {
        this.prob += prob;
    }

    isNull() {
        return (this.ID === -1);
    }
}

class Tower {
    constructor(name, silent_prob = false) {
        this.name = String(name);
        this.silent_prob = silent_prob;
        this.moves = 0;
        this.tower = [];

        let blockID = 1;
        for (let layer = 0; layer < 18; layer++) {
            let currLayer = [];
            for (let b = 0; b < 3; b++) {
                currLayer.push(new Block(blockID, b + 1));
                blockID++;
            }
            this.tower.push(currLayer);
        }
    }

    toString() {
        let out = "";
        for (let i = this.tower.length - 1; i >= 0; i--) {
            out += "\n" + this.tower[i].toString();
        }
        return `:${this.name}:${out}`;
    }

    print_prob() {
        let reprStr = "";
        for (let l = this.tower.length - 1; l >= 0; l--) {
            for (let i = 0; i < 3; i++) {
                reprStr += this.tower[l][i].printProb();
            }
            reprStr += "\n";
        }
        return `:${this.name}:\n${reprStr}`;
    }

    _findBlock(ID) {
        for (let l_idx = 0; l_idx < this.tower.length; l_idx++) {
            for (let b_idx = 0; b_idx < this.tower[l_idx].length; b_idx++) {
                if (this.tower[l_idx][b_idx].getID() === ID) {
                    return [l_idx, b_idx];
                }
            }
        }
        return [null, null];
    }

    isTowerValid() {
        if (this.tower.length < 18 || this.tower.length > 54) {
            return false;
        }
        let blockSet = new Set([-1]);
        for (let layer of this.tower) {
            for (let blk of layer) {
                if (blk.getID() !== -1 && (blk.getID() < 1 || blk.getID() > 54)) {
                    return false;
                }
                blockSet.add(blk.getID());
            }
        }
        return blockSet.size === 55;
    }

    move(ID, newPos, flag) {
        let [lvl, idx] = this._findBlock(ID);
        if (lvl === null) {
            return false;
        }

        const topIndex = this.tower.length - 1;
        if (lvl >= topIndex - 1) {
            return false;
        }

        if (flag) {
            const rand_val = Math.random();
            const prob_val = this.tower[lvl][idx].getProb();
            if (!this.silent_prob) {
                console.log(`Comparing random ${rand_val.toFixed(3)} vs block ${ID}'s prob ${prob_val.toFixed(3)}`);
            }
            if (rand_val < prob_val) {
                if (!this.silent_prob) {
                    console.log(`Move for block ${ID} failed by probability!`);
                }
                return false;
            }
        }
        this.tower[lvl][idx].setID(-1);
        const topLayer = this.tower[this.tower.length - 1];
        const hasNull = topLayer.some(b => b.isNull());
        if (hasNull) {
            if (!topLayer[newPos - 1].isNull()) {
                return false;
            }
            topLayer[newPos - 1] = new Block(ID, newPos);
        } else {
            const newLayer = [new Block(-1, 1), new Block(-1, 2), new Block(-1, 3)];
        }
    }
}