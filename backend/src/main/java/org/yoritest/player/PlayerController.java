package org.yoritest.player;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/players")
@RequiredArgsConstructor
public class PlayerController {

    private final PlayerService playerService;

    @PostMapping
    public ResponseEntity<Void> createPlayer(@RequestBody String name) {
        Player player = playerService.savePlayer(new PlayerRequest(name));
        System.out.println("Player created: " + player);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Player>> getPlayers() {
        return ResponseEntity.ok(playerService.getPlayers());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlayer(@PathVariable Long id) {
        playerService.deletePlayer(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updatePlayer(@PathVariable Long id, @RequestBody PlayerRequest playerRequest) {
        playerService.updatePlayer(id, playerRequest);
        return ResponseEntity.ok().build();
    }
}