var express = require('express');
var router = express.Router();
var Project = require('../models/projects');

router.route('/')

    .get(function (req, res) {
        Project.find(function (error, projects) {
            console.log(projects);
            if (error) res.send(error);

            res.json(projects);
        });
    })

    .post(function (req, res) {
        var project = new Project();

        project.title = req.body.title;
        project.description = req.body.description;
        project.link = req.body.link;

        project.save(function (error) {
            if (error) res.send(error)

            res.json({ message: 'Project created!' });
        });
    });

router.route('/:id')

    .get(function (req, res) {
        Project.findById(req.params.id, function (error, project) {
            if (error) res.send(error);

            res.json(project);
        });
    })

    .put(function (req, res) {
        Project.findById(req.params.id, function (error, project) {
            if (error) res.send(error)

            project.title = req.body.title;
            project.description = req.body.description;
            project.link = req.body.link;

            project.save(function (error) {
                if (error) res.send(error)

                res.json({ message: 'Project updated!' });
            });
        });
    })

    .delete(function (req, res) {
        Project.remove({ _id: req.params.id }, function (error, project) {
            if (error) res.send(error);

            res.json({ message: 'Project deleted!' });
        });
    });

module.exports = router;