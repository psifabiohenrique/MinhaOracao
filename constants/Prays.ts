export default class Getpray {
    begningDones: string[]
    misterysDones: [string[], string[], string[], string[], string[]]
    endDones: string[]

    begningOrder: string[]
    endOrder: string[]

    prays: {[key: string]: string}
    praysNames: {[key: string]: string}
    misterys: {[key: string]: string[]}

    initialHailMary: number
    MisteryHailMary: number

    mistery: string

    pray: string
    prayName: string
    misteryText: string

    prayStatus: string
    prayFinished: boolean

    constructor () {
        this.mistery = 'Gloriosos'

        this.begningDones = []
        this.misterysDones = [[], [], [], [], []]
        this.endDones = []
        
        this.begningOrder = ['oferecimento', 'sinalDaCruz', 'credo', 'paiNosso', 'aveMaria', 'aveMaria', 'aveMaria', 'gloriaAoPai', 'ohMeuJesus']
        this.endOrder = ['gloriaAoPai', 'ohMeuJesus', 'agradecimentoTerco', 'salveRainha']

        this.prays = {
                    'oferecimento': 'Divino Jesus, Nós Vos oferecemos este Terço que vamos rezar, Meditando nos mistérios da Vossa Redenção. Concedei-nos, Por intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, As virtudes que nos são necessárias Para bem rezá-lo E a graça de ganharmos as indulgências Desta santa devoção.',
                    'sinalDaCruz': 'Em nome do Pai, do Filho e do Espírito Santo. Amém!',
                    'credo': 'Creio em Deus Pai, todo-poderoso, criador do Céu e da Terra e em Jesus Cristo, seu único Filho, Nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria, padeceu sob Pôncio pilatos, foi crucificado, morto e sepultado; desceu a mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado a Direita de Deus Pai todo-poderoso, donde há de vir julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na Vida eterna. Amém!',
                    'gloriaAoPai': 'Glória ao Pai, ao Filho e o Espírito Santo. Como era no princípio, agora e sempre. Amém.',
                    'ohMeuJesus': 'Ó Meu Jesus, Perdoai-nos, livrai-nos do fogo do inferno, Levai as almas todas para o céu E socorrei principalmente as que mais precisarem. Amém.',
                    'paiNosso': 'Pai Nosso que estais no céu, santificado seja o vosso nome, vem a nós o vosso reino, seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos daí hoje, perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido, não nos deixei cair em tentação mas livrai-nos do mal. Amém.',
                    'aveMaria': 'Ave Maria, cheia de graça, o Senhor é convosco, bendita sois Vós entre as mulheres, bendito é o fruto em Vosso ventre, Jesus. \n\nSanta Maria Mãe de Deus, rogai por nós, os pecadores, agora e na hora da nossa morte. Amém.',
                    'agradecimentoTerco': 'Infinitas graças vos damos, Soberana Rainha, Pelos benefícios que todos os dias Recebemos de vossa mão liberais. Dignai-vos, agora e para sempre, Tomar-nos debaixo do vosso poderoso amparo E para mais vos obrigar Vos saudamos com uma Salve Rainha:',
                    'salveRainha': 'Salve Rainha, Mãe de Misericórdia, Vida, doçura, esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; A vós suspiramos gemendo e chorando Neste vale de lágrimas. Eia, pois, advogada nossa Esses vossos olhos misericordiosos a nós volvei, E depois deste desterro nos mostrai a Jesus, Bendito fruto do vosso ventre, Ó Clemente, ó Piedosa, ó Doce, Sempre Virgem Maria. \n\n Rogai por nós, Santa Mãe de Deus Para que sejamos dignos das promessas de Cristo. Amém.',
                }
        this.praysNames= {
                    'oferecimento': 'Oferecimento do Terço',
                    'sinalDaCruz': 'Sinal da santa cruz',
                    'credo': 'Creio',
                    'gloriaAoPai': 'Glória ao Pai',
                    'ohMeuJesus': 'Oh Meu Jesus',
                    'paiNosso': 'Pai Nosso',
                    'aveMaria': 'Ave Maria',
                    'agradecimentoTerco': 'Oração de Agradecimento do Terço',
                    'salveRainha': 'Salve Rainha',
                }
        this.misterys = {
                    'Doloroso': [
                        '1º mistério contemplemos a Agonia de Cristo Nosso Senhor, quando suou sangue no Horto.',
                        '2º mistério contemplemos a Flagelação de Jesus Cristo atado à coluna.',
                        '3º mistério contemplemos a Coroação de espinho de Nosso Senhor.',
                        '4º mistério contemplemos Jesus Cristo carregando a Cruz para o Calvário.',
                        '5º mistério contemplemos a Crucificação e morte de Nosso Senhor Jesus Cristo.'
                    ],
                    'Glorioso': [
                        '1º mistério contemplemos a Ressurreição de Cristo Nosso Senhor.',
                        '2º mistério contemplemos a Ascensão de Nosso Senhor ao Céu.',
                        '3º mistério contemplemos a Vinda do Espírito Santo sobre os Apóstolos reunidos com Maria Santíssima no Cenáculo em Jerusalém.',
                        '4º mistério contemplemos a Assunção de Nossa Senhora ao Céu.',
                        '5º mistério contemplemos a Coroação de Nossa Senhora no Céu como Rainha de todos os anjos e santos.'
                    ],
                    'Luminoso': [
                        '1º mistério contemplemos o Batismo de Jesus no rio Jordão.',
                        '2º mistério contemplemos a Auto-revelação de Jesus nas Bodas de Caná.',
                        '3º mistério contemplemos o Anúncio do Reino de Deus.',
                        '4º mistério contemplemos a Transfiguração de Jesus.',
                        '5º mistério contemplemos a Instituição da Eucaristia.'
                    ],
                    'Gozoso': [
                        '1º mistério contemplemos a Anunciação do Arcanjo São Gabriel à Nossa Senhora.',
                        '2º mistério contemplemos a Visitação de Nossa Senhora à sua prima Santa Isabel.',
                        '3º mistério contemplemos o Nascimento do Menino Jesus em Belém.',
                        '4º mistério contemplemos a Apresentação do Menino Jesus no Templo e a Purificação de Nossa Senhora.',
                        '5º mistério contemplemos a Perda e o Encontro do Menino Jesus no templo.'
                    ],
                }
        
        this.initialHailMary = 1
        this.MisteryHailMary = 1
        
        this.pray = ''
        this.prayName = ''
        this.misteryText = ''
        this.prayStatus = 'begining'
        this.prayFinished = false

        this.nextPray()
    }

    nextPray() {
       
        if(this.endDones.length == this.endOrder.length) {
            this.prayFinished = true
        }

        let prayIndex = ''
        let prayNumber = 0

        // First part of the rosary
        if(this.prayStatus == 'begining') {
            prayIndex = this.begningOrder[this.begningDones.length]
            this.pray = this.prays[prayIndex]
            if(prayIndex == 'aveMaria') {
                this.prayName = `${this.initialHailMary}ª - ${this.praysNames[prayIndex]}`
                this.initialHailMary++
            } else this.prayName = this.praysNames[prayIndex]
            this.begningDones.push(this.prayName)
            if(this.begningDones.length == this.begningOrder.length) {
                this.prayStatus = 'mistery'
            }
        }
        // Second part of the rosary
        else if(this.prayStatus == 'mistery') {
            
            for(let i = 0; i < this.misterysDones.length; i++){
                let array = this.misterysDones[i]
                if(array.length <= 11) {
                    if(array.length == 1) {
                        prayIndex = 'paiNosso'
                        this.prayName = `${this.praysNames[prayIndex]}`
                        
                    } else if(array.length == 0) {
                        this.pray = this.misterys[this.mistery][i]
                        this.prayName = 'Contemplação'
                        this.misterysDones[i].push(this.prayName)
                        this.MisteryHailMary = 1
                        this.misteryText = `${i + 1}° mistério`
                        break
                    } else {
                        prayIndex = 'aveMaria'
                        prayNumber = array.length
                        this.prayName = `${this.MisteryHailMary}ª - ${this.praysNames[prayIndex]}`
                        this.MisteryHailMary++
                    }
                    this.pray = this.prays[prayIndex]
                    this.misteryText = `${i + 1}° mistério`
                    this.misterysDones[i].push(this.prayName)

                    if(this.misterysDones[4].length == 12) {
                        this.misteryText = ''
                        this.prayStatus = 'end'
                    }
                    break
                }
            }
        }  
        // thrird part of the rosary
        else if(this.prayStatus == 'end') {
            prayIndex = this.endOrder[this.endDones.length]
            this.pray = this.prays[prayIndex]
            this.prayName = this.praysNames[prayIndex]
            this.endDones.push(this.prayName)
        }
        
        // update variables
        this.pray = this.pray
        this.prayName = this.prayName
        this.misteryText = this.misteryText
    }
    PreviousPray() {
       
        if(this.endDones.length == this.endOrder.length) {
            this.prayFinished = true
        }

        let prayIndex = ''
        let prayNumber = 0

        // First part of the rosary
        if(this.prayStatus == 'begining') {
            prayIndex = this.begningOrder[this.begningDones.length]
            this.pray = this.prays[prayIndex]
            if(prayIndex == 'aveMaria') {
                this.prayName = `${this.initialHailMary}ª - ${this.praysNames[prayIndex]}`
                this.initialHailMary++
            } else this.prayName = this.praysNames[prayIndex]
            this.begningDones.push(this.prayName)
            if(this.begningDones.length == this.begningOrder.length) {
                this.prayStatus = 'mistery'
            }
        }
        // Second part of the rosary
        else if(this.prayStatus == 'mistery') {
            
            for(let i = 0; i < this.misterysDones.length; i++){
                let array = this.misterysDones[i]
                if(array.length <= 11) {
                    if(array.length == 1) {
                        prayIndex = 'paiNosso'
                        this.prayName = `${this.praysNames[prayIndex]}`
                        
                    } else if(array.length == 0) {
                        this.pray = this.misterys[this.mistery][i]
                        this.prayName = 'Contemplação'
                        this.misterysDones[i].push(this.prayName)
                        this.MisteryHailMary = 1
                        this.misteryText = `${i + 1}° mistério`
                        break
                    } else {
                        prayIndex = 'aveMaria'
                        prayNumber = array.length
                        this.prayName = `${this.MisteryHailMary}ª - ${this.praysNames[prayIndex]}`
                        this.MisteryHailMary++
                    }
                    this.pray = this.prays[prayIndex]
                    this.misteryText = `${i + 1}° mistério`
                    this.misterysDones[i].push(this.prayName)

                    if(this.misterysDones[4].length == 12) {
                        this.misteryText = ''
                        this.prayStatus = 'end'
                    }
                    break
                }
            }
        }  
        // thrird part of the rosary
        else if(this.prayStatus == 'end') {
            if (this.endDones.length >= 0) {
                prayIndex = this.endOrder[this.endDones.length - 1]
                this.pray = this.prays[prayIndex]
                this.prayName = this.praysNames[prayIndex]
                this.endDones.push(this.prayName)
            } else {
                this.prayStatus = 'mistery'
            }
        }
        
        // update variables
        this.pray = this.pray
        this.prayName = this.prayName
        this.misteryText = this.misteryText
    }
}




