class ScroePanel {
  scroeEle: HTMLElement;
  levelEle: HTMLElement;
  scroe = 0;
  level = 1;
  maxLevel: number;  //最高等级
  maxScroe: number;  //升级所需分数
  constructor(maxLevel: number = 10, maxScroe: number = 10) {
    this.scroeEle = document.querySelector('#score')!;
    this.levelEle = document.querySelector('#level')!;

    this.maxLevel = maxLevel;
    this.maxScroe = maxScroe;
  }
  addScroe() {

    this.scroeEle.innerHTML = ++this.scroe + '';
    if (this.scroe % this.maxScroe === 0) {
      this.addLevel()
    }
  }
  addLevel() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}

export default ScroePanel