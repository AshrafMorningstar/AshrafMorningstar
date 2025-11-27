window.onload = function () {
  let ctx = document.getElementById("C"),
    c = ctx.getContext("2d"),
    w,
    h;
  fitCanvas();
  
  class node {
    constructor(x, y, mf, ms, sep, scr) {
      let ang = Math.random() * 2 * Math.PI - Math.PI;

      this.ax = 0;
      this.ay = 0;
      this.vx = Math.cos(ang);
      this.vy = Math.sin(ang);
      this.x = x;
      this.y = y;

      this.mf = mf;
      this.ms = ms;
      this.sep = sep;
      this.scr = scr;
    }
    run(nodes) {
      this.differentiate(nodes);
      this.update();
    }
    applyForce(x, y) {
      this.ax += x;
      this.ay += y;
    }
    differentiate(nodes) {
      let sep = this.separate(nodes),
        coh = this.cohesion(nodes);

      this.applyForce(sep.x * this.scr, sep.y * this.scr);
      this.applyForce(coh.x, coh.y);
    }
    update() {
      let vmag, velang;
      this.vx += this.ax;
      this.vy += this.ay;

      vmag = dist(this.vx, this.vy);
      if (vmag > this.mf) {
        velang = Math.atan2(this.vy, this.vx);
        this.vx = this.mf * Math.cos(velang);
        this.vy = this.mf * Math.sin(velang);
      }
      this.x += this.vx;
      this.y += this.vy;

      this.ax = 0;
      this.ay = 0;
    }
    seek(tx, ty) {
      let desx = tx - this.x,
        desy = ty - this.y,
        desmag = dist(desx, desy);
      if (desmag != 0) {
        desx = desx / desmag;
        desy = desy / desmag;
      }
      desx = desx * this.ms;
      desy = desy * this.ms;
      let strx = desx - this.vx,
        stry = desy - this.vy,
        strmag = dist(strx, stry),
        strang = Math.atan2(stry, strx);
      if (strmag > this.mf) {
        strx = this.mf * Math.cos(strang);
        stry = this.mf * Math.sin(strang);
      }
      return { x: strx, y: stry };
    }
    show(size, color) {
      c.beginPath();
      c.arc(this.x, this.y, size / 2, 0, 2 * Math.PI);
      c.fillStyle = color;
      c.lineWidth = 1;
      c.fill();
    }
    separate(nodes) {
      let steerx = 0,
        steery = 0,
        count = 0,
        d,
        diffx,
        diffy,
        radius,
        steerrad,
        steerang;

      for (let i = 0, len = nodes.length; i < len; i++) {
        d = dist(this, nodes[i]);
        if (d > 0 && d < this.sep) {
          diffx = this.x - nodes[i].x;
          diffy = this.y - nodes[i].y;
          radius = dist(diffx, diffy);
          diffx = diffx / radius;
          diffy = diffy / radius;
          diffx = diffx / d;
          diffy = diffy / d;
          steerx += diffx;
          steery += diffy;
          count++;
        }
      }
      if (count > 0) {
        steerx = steerx / count;
        steery = steery / count;
      }
      steerrad = dist(steerx, steery);
      if (steerrad > 0) {
        steerx = steerx / steerrad;
        steery = steery / steerrad;
        steerx = steerx * this.ms;
        steery = steery * this.ms;
        steerx -= this.vx;
        steery -= this.vy;
        steerrad = dist(steerx, steery);
        if (steerrad > this.mf) {
          steerang = Math.atan2(steery, steerx);
          steerx = this.mf * Math.cos(steerang);
          steery = this.mf * Math.sin(steerang);
        }
      }
      return { x: steerx, y: steery };
    }
    cohesion(nodes) {
      let sumx = 0,
        sumy = 0,
        this_index = nodes.indexOf(this);
      if (this_index != 0 && this_index != nodes.length - 1) {
        sumx += nodes[this_index - 1].x + nodes[this_index + 1].x;
        sumy += nodes[this_index - 1].y + nodes[this_index + 1].y;
      } else if (this_index == 0) {
        sumx += nodes[nodes.length - 1].x + nodes[this_index + 1].x;
        sumy += nodes[nodes.length - 1].y + nodes[this_index + 1].y;
      } else if (this_index == nodes.length - 1) {
        sumx += nodes[this_index - 1].x + nodes[0].x;
        sumy += nodes[this_index - 1].y + nodes[0].y;
      }
      sumx /= 2;
      sumy /= 2;
      return this.seek(sumx, sumy);
    }
  }
  class line {
    constructor(mf, ms, sep, scr, mel) {
      this.nodes = [];
      for (let k = 0; k < 20; k++) {
        this.addNode(
          new node(
            w / 2 + 10 * Math.cos((2 * k * Math.PI) / 20),
            h / 2 + 10 * Math.sin((2 * k * Math.PI) / 20),
            mf,
            ms,
            sep,
            scr
          )
        );
      }
      this.mf = mf;
      this.ms = ms;
      this.sep = sep;
      this.scr = scr;
      this.mel = mel;
    }
    run() {
      for (let i = 0, len = this.nodes.length; i < len; i++) {
        this.nodes[i].run(this.nodes);
      }
      this.growth();
    }
    addNode(node) {
      this.nodes.push(node);
    }
    addNodeAt(node, i) {
      this.nodes.splice(i, 0, node);
    }
    growth() {
      let d, mid_x, mid_y;
      for (let i = 0, len = this.nodes.length; i < len - 1; i++) {
        d = dist(this.nodes[i], this.nodes[i + 1]);
        if (d > this.mel) {
          mid_x = (this.nodes[i].x + this.nodes[i + 1].x) / 2;
          mid_y = (this.nodes[i].y + this.nodes[i + 1].y) / 2;
          this.addNodeAt(
            new node(mid_x, mid_y, this.mf, this.ms, this.sep, this.scr),
            i + 1
          );
        }
      }
    }
    show() {
      c.beginPath();
      for (let i = 0, len = this.nodes.length; i < len; i++) {
        c.lineTo(this.nodes[i].x, this.nodes[i].y);
      }
      c.fillStyle = "white";
      c.fill();
      // for(let i = 0, len = this.nodes.length; i < len; i++){
      //   this.nodes[i].show(2,"red");
      // }
    }
  }

  let max_force = 1,
    max_speed = 1,
    separation = 20,
    separation_cohesion_ratio = 0.95,
    max_edge_length = 5,
    p = new line(
      max_force,
      max_speed,
      separation,
      separation_cohesion_ratio,
      max_edge_length
    );

  function draw() {
    if (p.nodes.length < 2000) {
      p.run();
    }
    p.show();
  }

  function fitCanvas() {
    w = ctx.width = window.innerWidth;
    h = ctx.height = window.innerHeight;
  }
  function loop() {
    fitCanvas();
    draw();
    window.requestAnimationFrame(loop);
  }
  window.requestAnimationFrame(loop);
};

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar