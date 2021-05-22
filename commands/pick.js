var escolhas,
    respostaDoBot = [],
    stringFinal = "Escolha do bot: ";
module.exports = {
	name: 'pick',
	description: 'Pick!',
	execute(message, args) {
        escolhas = parseInt(args[0]);
        if(!Number.isInteger(escolhas)){
            console.log(Number.isInteger(escolhas));
            message.channel.send("Indique um valor para as escolhas certo!");
            return;
        }
        console.log("Numero de escolhas: "+escolhas)
        args[0] = "";
        args = args.join(' ');
        args = args.split(', ');

        for(var i = 0; i<escolhas; i++){
            var contadorDeEscolhidas = 0;
            var novaEscolha = args[Math. floor(Math. random()*args. length)];
            for(var j = 0; j < respostaDoBot.length; j++){
                console.log(respostaDoBot[j]);
                if(i!=0){
                    if(novaEscolha == respostaDoBot[j]){
                        contadorDeEscolhidas++;
                        console.log("Contador de escolhas"+contadorDeEscolhidas);
                    }
                }
            }
            if(contadorDeEscolhidas==0){
                respostaDoBot[i] = novaEscolha;
                stringFinal =stringFinal+ `\n ${i+1} - `+respostaDoBot[i];
                console.log(stringFinal);
                message.channel.send(stringFinal);
                stringFinal = "";
            }
            else{
                i--;
            }
        }
	},
};