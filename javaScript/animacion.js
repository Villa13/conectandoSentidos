class Example extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.animation('animation', '/src/characters/character_4/attack/front/character_4_attack_front_anim.json');
    this.load.atlas('character_4_attack_front', '/src/characters/character_4/attack/front/character_4_attack_front.png', '/src/characters/character_4/attack/front/character_4_attack_front_atlas.json');
    this.load.animation('animation1', '/src/characters/character_4/carry/front/character_4_carry_front_anim.json');
    this.load.atlas('character_4_carry_front', '/src/characters/character_4/carry/front/character_4_carry_front.png', '/src/characters/character_4/carry/front/character_4_carry_front_atlas.json');
    this.load.animation('animation2', '/src/characters/character_4/walk/front/character_4_walk_front_anim.json');
    this.load.atlas('character_4_walk_front', '/src/characters/character_4/walk/front/character_4_walk_front.png', '/src/characters/character_4/walk/front/character_4_walk_front_atlas.json');
  
  }

  create() {
    this.startAnimationOnVoiceCommand(); // Inicia la animación al recibir un comando de voz
  }

  startAnimationOnVoiceCommand() {
    const recognizer = new window.webkitSpeechRecognition();
    recognizer.continuous = true;

    recognizer.onresult = (event) => {
      const result = event.results[event.results.length - 1][0].transcript.toLowerCase();
      console.log('Result:', result);

      if (result.includes('atacar')) {
        const sprite = this.add.sprite(100, 100, 'character_4_attack_front').play('character_4_attack_front_anim');
        sprite.setScale(4);

        sprite.on('animationcomplete', () => {
          sprite.destroy(); // Desaparece el sprite después de reproducir la animación completa
        });
      } else if (result.includes('llevar')) {
        const sprite = this.add.sprite(100, 100, 'character_4_carry_front').play('character_4_carry_front_anim');
        sprite.setScale(4);

        sprite.on('animationcomplete', () => {
          sprite.destroy(); // Desaparece el sprite después de reproducir la animación completa
        });
      } else if (result.includes('correr')) {
        const sprite = this.add.sprite(100, 100, 'character_4_walk_front').play('character_4_walk_front_anim');
        sprite.setScale(4);

        sprite.on('animationcomplete', () => {
          sprite.destroy(); // Desaparece el sprite después de reproducir la animación completa
        });
      } else {
      }
    };

    recognizer.start();
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 300,
  height: 300,
  backgroundColor: '#dadfe6',
  scene: Example
};

const game = new Phaser.Game(config);
