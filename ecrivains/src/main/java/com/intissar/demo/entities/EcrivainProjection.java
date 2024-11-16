package com.intissar.demo.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "nomEcriv", types = { Ecrivain.class })
public interface EcrivainProjection {
	public String getNomEcrivain();

}
