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
        this.endOrder = ['agradecimentoTerco', 'salveRainha']

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

        this.nextPray(0)
    }

    nextPray(ID: number) {
        if (ID <= 8) { // Do ID 0 ao 8 é o início do terço

            let index = this.begningOrder[ID]
            this.misteryText = ''
            if (ID == 4) {
                this.misteryText = '1ª Ave Maria'
            } else if (ID == 5) {
                this.misteryText = '2ª Ave Maria'
            } else if (ID == 6) {
                this.misteryText = '3ª Ave Maria'
            }
            this.pray = this.prays[index]
            this.prayName = this.praysNames[index]

        } else if (ID <= 78) {

            // Em cada mistério:
            // id 1 == Contemplação, id 2 == Pai nosso
            // id 3 à 12 são às 10 ave marias
            // id 13 é o glória ao pai
            // id 14 é o óh meu Jesus
            // Ao todo são 78 orações ao longo das 5 dezenas

            let idInMistery = ID - 8
            let index = 0
            for (index; index < 5; index++) {
                if(idInMistery > 14) {
                    idInMistery -= 14
                } else {
                    break
                }
            }


            if (idInMistery == 1) {
                this.misteryText = `${index + 1}º Mistério`
                this.pray = this.misterys[this.mistery][index]
                this.prayName = 'Contemplação'
            }
            if(idInMistery == 2) {
                this.misteryText = `${index + 1}º Mistério`
                this.pray = this.prays["paiNosso"]
                this.prayName = this.praysNames["paiNosso"]
            } else if (idInMistery == 13) {
                this.misteryText = `${index + 1}º Mistério`
                this.pray = this.prays["gloriaAoPai"]
                this.prayName = this.praysNames["gloriaAoPai"]
            } else if(idInMistery == 14) {
                this.misteryText = `${index + 1}º Mistério`
                this.pray = this.prays["ohMeuJesus"]
                this.prayName = this.praysNames["ohMeuJesus"]
            } else if (idInMistery > 2 && idInMistery < 13) { // Ave marias
                this.misteryText = `${index + 1}º Mistério`
                this.pray = this.prays["aveMaria"]
                this.prayName = `${idInMistery - 2}ª Ave Maria`
            }

        } else {

            let index = this.endOrder[ID - 79]
            this.misteryText = ''
            this.pray = this.prays[index]
            this.prayName = this.praysNames[index]

            if (ID >= 81) {
                this.prayFinished = true
            }
        }
    }
}