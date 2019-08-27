import java.util.*;
import java.util.concurrent.*;
class SnakeAndLadder
{
	public static void main(String[] args) 
	{
		Map<String,Integer> playerPosition  = new ConcurrentHashMap<>(); 
		Map<Integer,Integer> laddersMapper = new HashMap<>();
		Map<Integer,Integer> snakesMapper = new HashMap<>();

		List<String> rankList  = new ArrayList<>(); 
		Random randomNumber = new Random();
		laddersMapper.put(5,35);
		laddersMapper.put(17,13);
		laddersMapper.put(12,78);
		laddersMapper.put(33,67);
		laddersMapper.put(65,95);
		//snake mapping
		snakesMapper.put(8,32);
		snakesMapper.put(18,41);
		snakesMapper.put(36,66);
		snakesMapper.put(56,99);
		snakesMapper.put(69,87);
		

		playerPosition.put("tarun",0);
		playerPosition.put("Shailu",0);
		playerPosition.put("panku",0);
		//for(Integer snake:snakesMapper.keySet()){
		//	System.out.println(laddersMapper.get(snake));
		//}
		int position=0,number,player=0;
		while(playerPosition.size()!=1){
			for(String nameOfPlayer:playerPosition.keySet()){
				number = randomNumber.nextInt(6)+1;
				player=playerPosition.get(nameOfPlayer)+number;
				System.out.println(number+" "+player+" "+playerPosition.get(nameOfPlayer)+ " " +nameOfPlayer);
				if(player== 100){
					rankList.add(nameOfPlayer);
					playerPosition.remove(nameOfPlayer);	
				}
				else if(player <=100)
					playerPosition.replace(nameOfPlayer,playerPosition.get(nameOfPlayer),player);
				if((playerPosition.size()-1)==position){
					position=0;
				}
				position++;
//				playerPosition.remove(nameOfPlayer);
			}
		System.out.println();
		}
	}
}
