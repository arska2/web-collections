package com.collections.web.website;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/websites")
public class WebsiteController {
	@Autowired
	private WebsiteRepository repo;
	
	@GetMapping
	public List<Website> readAll(){
		return repo.findAll();
	}
	
}
